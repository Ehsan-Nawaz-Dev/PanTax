import type { FC } from "react";
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
  welcomeCaptionSx,
  titleSx,
  subtitleSx,
  dividerSx,
  linksWrapperSx,
  forgotPasswordLinkSx,
  signUpLinkSx,
  signUpTextWrapperSx,
} from "@styles/pages/auth/login";

const Login: FC = () => {
  return (
    <PublicLayout>
      <Box component="main" sx={loginMainSx}>
        <Box sx={imageWrapperSx}>
          <Box
            component="img"
            src={loginImage}
            alt="Team collaboration"
            sx={imageSx}
          />
        </Box>

        <Box sx={formPanelSx}>
          <Box sx={formContentSx}>
            <Typography variant="caption" sx={welcomeCaptionSx}>
              WELCOME
            </Typography>
            <Typography variant="h1" sx={titleSx}>
              Log In
            </Typography>
            <Typography variant="body1" sx={subtitleSx}>
              Sign in using your registered account
            </Typography>

            <LoginForm />

            <Divider sx={dividerSx} />

            <Box sx={linksWrapperSx}>
              <Typography
                component={Link}
                to={APP_ROUTES.FORGOT_PASSWORD}
                variant="body2"
                sx={forgotPasswordLinkSx}
              >
                Forgot Password?
              </Typography>
              <Box sx={signUpTextWrapperSx}>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "0.875rem", fontWeight: 400 }}
                >
                  Don&apos;t have an account?
                </Typography>
                <Typography
                  component={Link}
                  to={APP_ROUTES.REGISTER}
                  variant="body2"
                  sx={signUpLinkSx}
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
