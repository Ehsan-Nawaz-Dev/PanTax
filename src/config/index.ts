const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || "";

export const CONFIG = {
  API_BASE_URL,
  GRAPHQL_URL: `${API_BASE_URL}/graphql`,
  NODE_ENV: import.meta.env.NODE_ENV,
};
