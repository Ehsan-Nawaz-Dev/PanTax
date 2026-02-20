import type { FC } from "react";
import { Typography } from "@mui/material";
import PublicLayout from "@components/PublicLayout";
import { forgetPasswordPageTitleSx } from "@styles/pages/auth/forgetPassword.styles";

const ForgetPassword: FC = () => {
  return (
    <PublicLayout>
      <Typography variant="h1" sx={forgetPasswordPageTitleSx}>
        Forget Password
      </Typography>
    </PublicLayout>
  );
};

export default ForgetPassword;
