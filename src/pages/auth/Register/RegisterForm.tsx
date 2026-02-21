import type { FC, JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputController from "@components/controllers/InputController";
import type { RegisterForm as RegisterFormType } from "@interfaces/formTypes";
import { registerFormInitialValues } from "@constants/formInitials";
import { useAuthContext } from "@contexts/Auth/hook";
import { setToken } from "@lib/helper";
import { registerValidationSchema } from "@validations/index";
import "@styles/pages/auth/register/register.css";

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
      <Typography className="register-welcome-caption">REGISTER</Typography>
      <Typography className="register-title">Sign Up</Typography>
      <Typography className="register-subtitle">
        Get a 7 day free trial | No credit card required.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="register-fields-wrapper">
            {/* Row 1 - First Name & Last Name */}
            <Box className="register-row">
              <Box className="register-col">
                <InputController
                  name="firstName"
                  title="First Name"
                  placeholder="Enter Name"
                />
              </Box>
              <Box className="register-col">
                <InputController
                  name="lastName"
                  title="Last Name"
                  placeholder="Enter Name"
                />
              </Box>
            </Box>

            {/* Row 2 - Email only */}
            <Box className="register-row">
              <Box className="register-col">
                <InputController
                  name="email"
                  title="Email"
                  fieldType="email"
                  placeholder="Enter Email"
                />
              </Box>
            </Box>

            {/* Row 3 - Company Name & EFIN */}
            <Box className="register-row">
              <Box className="register-col">
                <InputController
                  name="companyName"
                  title="Company Name"
                  placeholder="Enter Company Name"
                />
              </Box>
              <Box className="register-col">
                <InputController
                  name="efin"
                  title="EFIN"
                  fieldType="number"
                  placeholder="Enter EFIN"
                />
              </Box>
            </Box>
          </Box>

          <Box className="register-submit-wrapper">
            <Button
              variant="contained"
              type="submit"
              disableElevation
              className="register-submit-btn"
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