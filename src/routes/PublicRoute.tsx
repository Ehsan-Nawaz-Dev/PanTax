import type { FC } from "react";
import { Fragment } from "react";
import { Navigate, useLocation } from "react-router";
// utils
import { getToken } from "@lib/helper";

const PublicRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const token = getToken();

  if (token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return <Fragment>{children}</Fragment>;
  }
};

export default PublicRoute;
