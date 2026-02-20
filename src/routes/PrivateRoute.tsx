import type { FC } from "react";
import { Navigate, useLocation } from "react-router";
import { Backdrop } from "@mui/material";
// components

// import MainLayout from "@components/layouts/MainLayout";
// import { CommonLoader } from "@components/CommonLoader";
// context, interfaces, utils
import type { ChildrenType } from "@interfaces/common";
import { useAuthContext } from "@contexts/Auth/hook";
import { APP_ROUTES } from "@constants/index";

const PrivateRoute: FC<ChildrenType> = ({ children }) => {
  const location = useLocation();

  const { isLoading, isLoaded, isLoggedIn } = useAuthContext();

  if (isLoading || !isLoaded) {
    return <Backdrop open={true} />;
  }

  if (isLoggedIn) {
    // return <MainLayout>{children}</MainLayout>;
    return <>{children}</>;
  } else {
    return (
      <Navigate to={APP_ROUTES.LOGIN} state={{ from: location }} replace />
    );
  }
};

export default PrivateRoute;
