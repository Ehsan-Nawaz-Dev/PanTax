import { redirect } from "react-router";
import { useCallback, useEffect, useState } from "react";
import type { FC } from "react";
// graphql, interfaces, constants
import { APP_ROUTES, HTTP_STATUS } from "@constants/index";
import { clearToken, getToken } from "@lib/helper";
import type { ChildrenType, Nullable } from "@interfaces/common";
import type { User, UserRoles } from "@generated/graphql";
import { UserRoles as UserRolesEnum } from "@generated/graphql";
import { useFetchUserQuery } from "@services/user.service";
import { AuthContext } from "./constants";

export const AuthContextProvider: FC<ChildrenType> = ({ children }) => {
  const hasToken = getToken();

  const [currentUser, setUser] = useState<Nullable<User>>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [roles, setRoles] = useState<UserRoles[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [getUser, { loading: isLoading }] = useFetchUserQuery();

  const resetValue = () => {
    setUser(null);
    setRoles([]);
    setIsLoaded(true);
    clearToken();
    redirect(APP_ROUTES.LOGIN);
  };

  const fetchUser = useCallback(async () => {
    if (hasToken) {
      try {
        const { data } = await getUser();
        if (data) {
          const { fetchUser } = data;
          const { response, user } = fetchUser;
          const { status } = response || {};
          if (status === HTTP_STATUS.SUCCESS) {
            const { id, userRoles } = user || {};
            if (id) {
              setUser(user as User);
              setIsLoggedIn(true);
              const roles = userRoles?.map<UserRoles>((item) => {
                const { role } = item || {};
                const { type } = role || {};
                return type ?? UserRolesEnum.Admin;
              });
              setRoles(roles ?? []);
              setIsLoaded(true);
            } else {
              resetValue();
            }
          } else {
            resetValue();
          }
        }
      } catch (error) {
        console.error(error);
        resetValue();
      }
    } else {
      setIsLoaded(true);
    }
  }, [getUser, hasToken]);

  useEffect(() => {
    queueMicrotask(() => fetchUser());
  }, [fetchUser]);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        isLoaded,
        isLoading,
        isLoggedIn,
        currentUser,
        setIsLoggedIn,
        userRoles: roles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
