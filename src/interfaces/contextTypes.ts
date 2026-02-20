import type { Nullable } from "./common";
import type { User, UserRoles } from "@generated/graphql";

export type AuthContextProps = {
  userRoles: UserRoles[];
  isLoaded: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser: Nullable<User>;
  setUser: (user: Nullable<User>) => void;
  setIsLoggedIn: (param: boolean) => void;
};
