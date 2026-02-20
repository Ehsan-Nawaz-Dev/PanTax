import { RetryLink } from "@apollo/client/link/retry";
import {
  HttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  Observable,
} from "@apollo/client";
//constants, helpers
import { getToken, handleLogout } from "@lib/helper";
import { CONFIG } from "@config/index";
import { APP_ROUTES, TOKEN_INVALID, UNAUTHORIZED } from "@constants/index";

const httpLink = new HttpLink({
  uri: `${CONFIG.GRAPHQL_URL}`,
});

/**
 * Auth Link - Adds authentication token to requests
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getToken();

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});

/**
 * Retry Link - Retries failed requests with exponential backoff
 */
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 5000,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: (error) => {
      // Retry on network errors but not on GraphQL errors
      return !!error && !("result" in error);
    },
  },
});

/**
 * Error Link - Handles GraphQL and network errors
 */

const errorLink = new ApolloLink((operation, forward) => {
  return new Observable((observer) => {
    const subscription = forward(operation).subscribe({
      next: (result) => {
        // Check for GraphQL errors in the result
        if (result.errors) {
          for (const error of result.errors) {
            const { message, extensions } = error;

            console.error(
              `[GraphQL error]: Message: ${message}, Location: ${error.locations}, Path: ${error.path}`
            );

            // Handle authentication errors
            if (
              message === UNAUTHORIZED ||
              message === TOKEN_INVALID ||
              extensions?.code === "UNAUTHENTICATED"
            ) {
              handleLogout();
              observer.error(error);
              return;
            }

            // Handle forbidden errors
            if (extensions?.code === "FORBIDDEN") {
              console.error("Access denied:", message);
            }
          }
        }

        observer.next(result);
      },
      error: (networkError) => {
        console.error(`[Network error]:`, networkError);

        // Clear Apollo cache on network errors
        client.clearStore().catch((err) => {
          console.error("Error clearing cache:", err);
        });

        // Redirect to maintenance page
        if (typeof window !== "undefined") {
          window.location.replace(APP_ROUTES.MAINTENANCE_ROUTE);
        }

        observer.error(networkError);
      },
      complete: () => {
        observer.complete();
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  });
});

/**
 * Request Logger Link - Logs outgoing requests (development only)
 */
const requestLoggerLink = new ApolloLink((operation, forward) => {
  if (CONFIG.NODE_ENV === "development") {
    console.log(`[GraphQL Request]: ${operation.operationName}`, {
      query: operation.query,
      variables: operation.variables,
    });
  }
  return forward(operation);
});

/**
 * Response Logger Link - Logs incoming responses (development only)
 */
const responseLoggerLink = new ApolloLink((operation, forward) => {
  return new Observable((observer) => {
    const subscription = forward(operation).subscribe({
      next: (result) => {
        if (CONFIG.NODE_ENV === "development") {
          console.log(`[GraphQL Response]: ${operation.operationName}`, result);
        }
        observer.next(result);
      },
      error: (error) => observer.error(error),
      complete: () => observer.complete(),
    });

    return () => subscription.unsubscribe();
  });
});

const defaultOptions: ApolloClient.DefaultOptions = {
  // Default options for queries and mutations
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  defaultOptions: defaultOptions,
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    authMiddleware,
    retryLink,
    errorLink,

    requestLoggerLink,
    responseLoggerLink,
    httpLink,
  ]),
});

export default client;
