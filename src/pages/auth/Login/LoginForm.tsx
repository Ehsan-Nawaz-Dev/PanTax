import type { FC, JSX } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import InputController from "@components/controllers/InputController";
// interfaces, constants, validations, contexts, helpers
import type { LoginForm as LoginFormType } from "@interfaces/formTypes";
import { loginFormInitialValues } from "@constants/formInitials";
import { EFIN, PASSWORD, EMAIL } from "@constants/constants";
import { loginValidationSchema } from "@validations/index";
import { useAuthContext } from "@contexts/Auth/hook";
import { setToken } from "@lib/helper";

const LoginForm: FC = (): JSX.Element => {
  const { setIsLoggedIn } = useAuthContext();

  const methods = useForm<LoginFormType>({
    defaultValues: loginFormInitialValues,
    resolver: yupResolver(loginValidationSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
    setToken("1234567890");
    setIsLoggedIn(true);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="login-fields-wrapper">
          <InputController
            name="efin"
            title={EFIN}
            fieldType="number"
            placeholder="Enter EFIN"
          />
          <InputController
            name="email"
            title={EMAIL}
            fieldType="email"
            placeholder="Enter Email"
          />
          <InputController
            isPassword
            name="password"
            title={PASSWORD}
            fieldType="password"
            placeholder="Enter Password"
          />
        </Box>
        <Box className="login-submit-wrapper">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disableElevation
            className="login-submit-btn"
          >
            Log In
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
