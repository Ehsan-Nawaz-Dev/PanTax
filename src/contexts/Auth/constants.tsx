import { createContext } from "react";
import type { AuthContextProps } from "@interfaces/contextTypes";
import type { Nullable } from "@interfaces/common";
import type { User } from "@generated/graphql";

export const AuthContext = createContext<AuthContextProps>({
  userRoles: [],
  isLoaded: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: false,
  setUser: (_user: Nullable<User>) => {},
  setIsLoggedIn: () => {},
});
