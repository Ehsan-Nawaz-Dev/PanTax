import type { FC, JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Box, Button, Typography, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputController from "@components/controllers/InputController";
import type { RegisterForm as RegisterFormType } from "@interfaces/formTypes";
import { registerFormInitialValues } from "@constants/formInitials";
import { useAuthContext } from "@contexts/Auth/hook";
import { setToken } from "@lib/helper";
import { registerValidationSchema } from "@validations/index";

import {
  formFieldInputSx,
  loginButtonSx,
  submitButtonWrapperSx,
  headerSx,
  subHeaderSx,
  registerCaptionSx,
} from "@styles/pages/auth/register";

const RegisterForm: FC = (): JSX.Element => {
  const { setIsLoggedIn } = useAuthContext();

  const methods = useForm<RegisterFormType>({
    defaultValues: registerFormInitialValues,
    resolver: yupResolver(registerValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<RegisterFormType> = (_data) => {
    setToken("1234567890");
    setIsLoggedIn(true);
  };

  return (
    <Box>
      <Typography sx={registerCaptionSx}>REGISTER</Typography>
      <Typography variant="h3" sx={headerSx}>
        Sign Up
      </Typography>
      <Typography sx={subHeaderSx}>
        Get a 7 day free trial | No credit card required.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2.5}>
            {/* Row 1 - First Name & Last Name */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <InputController
                isRequired
                name="firstName"
                title="First Name"
                placeholder="Enter Name"
                inputSx={formFieldInputSx}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InputController
                isRequired
                name="lastName"
                title="Last Name"
                placeholder="Enter Name"
                inputSx={formFieldInputSx}
              />
            </Grid>

            {/* Row 2 - Email only */}
            <Grid size={{ xs: 12 }}>
              <InputController
                isRequired
                name="email"
                title="Email"
                fieldType="email"
                placeholder="Enter Email"
                inputSx={formFieldInputSx}
              />
            </Grid>

            {/* Row 3 - Company Name & EFIN */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <InputController
                isRequired
                name="companyName"
                title="Company Name"
                placeholder="Enter Company Name"
                inputSx={formFieldInputSx}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <InputController
                isRequired
                name="efin"
                title="EFIN"
                fieldType="number"
                placeholder="Enter EFIN"
                inputSx={formFieldInputSx}
              />
            </Grid>
          </Grid>

          <Box sx={submitButtonWrapperSx}>
            <Button
              variant="contained"
              type="submit"
              disableElevation
              sx={loginButtonSx}
            >
              Register
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default RegisterForm;