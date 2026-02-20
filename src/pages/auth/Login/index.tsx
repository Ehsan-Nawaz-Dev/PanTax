import type { FC } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { Box, Divider, Typography } from "@mui/material";
// components
import PublicLayout from "@components/PublicLayout";
import LoginForm from "./LoginForm";
// assets
import loginImage from "@assets/images/login.png";
import { APP_ROUTES } from "@constants/index";
// styles
import {
  loginMainSx,
  imageWrapperSx,
  imageSx,
  formPanelSx,
  formContentSx,
} from "@styles/pages/auth/login";
// CSS overrides for login page
import "@styles/pages/auth/login/login.css";

const Login: FC = () => {
  // Add body class for header scoping
  useEffect(() => {
    document.body.classList.add("login-active");
    return () => {
      document.body.classList.remove("login-active");
    };
  }, []);

  return (
    <PublicLayout>
      <Box component="main" sx={loginMainSx} className="login-page">
        <Box sx={imageWrapperSx}>
          <Box
            component="img"
            src={loginImage}
            alt="Team collaboration"
            sx={imageSx}
          />
        </Box>

        <Box sx={formPanelSx} className="login-form-panel">
          <Box sx={formContentSx}>
            <Typography variant="caption" className="login-welcome-caption">
              WELCOME
            </Typography>
            <Typography variant="h1" className="login-title">
              Log In
            </Typography>
            <Typography variant="body1" className="login-subtitle">
              Sign in using your registered account
            </Typography>

            <LoginForm />

            <Divider className="login-divider" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.5,
              }}
            >
              <Typography
                component={Link}
                to={APP_ROUTES.FORGOT_PASSWORD}
                variant="body2"
                className="login-forgot-link"
              >
                Forgot Password?
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" className="login-account-text">
                  Don&apos;t have an account?
                </Typography>
                <Typography
                  component={Link}
                  to={APP_ROUTES.REGISTER}
                  variant="body2"
                  className="login-signup-link"
                >
                  Sign Up
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default Login;
