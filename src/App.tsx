import type { FC } from "react";
import { ApolloProvider } from "@apollo/client/react";
// packages
import { ThemeProvider } from "@mui/material";
// components
import { AuthContextProvider } from "@contexts/Auth/index";
// routes
import AppRoutes from "@routes/index";
// theme
import customTheme from "@theme/index";
// apollo
import client from "./apollo/index";

const App: FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
