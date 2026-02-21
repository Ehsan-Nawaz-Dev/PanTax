import type { FC } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import PublicLayout from "@components/PublicLayout";
import RegisterForm from "./RegisterForm";
import { APP_ROUTES } from "@constants/index";
import "@styles/pages/auth/register/register.css";

const Register: FC = () => {
  useEffect(() => {
    // Apply body class for fixed header layout tracking
    document.body.classList.add("register-active");
    return () => {
      document.body.classList.remove("register-active");
    };
  }, []);

  return (
    <PublicLayout>
      <Box className="register-page">
        <Box className="register-form-panel">
          <RegisterForm />

          <Divider className="register-divider" />

          <Box className="register-bottom-bar">
            <Typography className="register-account-text">
              Already have an account?
            </Typography>
            <Link to={APP_ROUTES.LOGIN} className="register-login-link">
              Log In
            </Link>
          </Box>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default Register;