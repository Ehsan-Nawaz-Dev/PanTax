import type { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import PublicLayout from "@components/PublicLayout";
import RegisterForm from "./RegisterForm";
import { APP_ROUTES } from "@constants/index";
import {
  registerMainSx,
  formPanelSx,
  dividerSx,
  signUpLinkSx,
  signUpTextWrapperSx,
  bottomLinkWrapperSx
} from "@styles/pages/auth/register"; // Make sure path is correct

const Register: FC = () => {
  return (
    <PublicLayout>
      <Box component="main" sx={registerMainSx}>
        {/* Removed Container sm to allow figma width */}
        <Box sx={formPanelSx}>
          <RegisterForm />

          <Divider sx={dividerSx} />

          <Box sx={bottomLinkWrapperSx}>
            <Box sx={signUpTextWrapperSx}>
              <Typography variant="body2" sx={{ color: "#333", fontSize: "14px" }}>
                Already have an account?
              </Typography>
              <Typography
                component={Link}
                to={APP_ROUTES.LOGIN}
                variant="body2"
                sx={signUpLinkSx}
              >
                Log In
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default Register;