import type { FC, JSX } from "react";
// packages imports
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
// components
import PublicRoute from "./PublicRoute";
// pages
const Login = lazy(() => import("@pages/auth/Login/index"));
const Register = lazy(() => import("@pages/auth/Register/index"));
const ForgetPassword = lazy(() => import("@pages/auth/ForgetPassword/index"));
// constants
import { APP_ROUTES } from "@constants/index";

const AppRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      {/* public routes */}
      <Route
        path={APP_ROUTES.ROOT_ROUTE}
        element={<Navigate replace to={APP_ROUTES.LOGIN} />}
      />

      {/* Auth routes */}

      <Route
        caseSensitive
        path={APP_ROUTES.LOGIN}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        caseSensitive
        path={APP_ROUTES.REGISTER}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        caseSensitive
        path={APP_ROUTES.FORGOT_PASSWORD}
        element={
          <PublicRoute>
            <ForgetPassword />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
