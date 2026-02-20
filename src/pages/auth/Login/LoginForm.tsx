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
// styles
import {
  formFieldInputSx,
  loginButtonSx,
  fieldsWrapperSx,
  submitButtonWrapperSx,
} from "@styles/pages/auth/login";

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
        <Box sx={fieldsWrapperSx}>
          <InputController
            isRequired
            name="efin"
            title={EFIN}
            fieldType="number"
            placeholder="Enter EFIN"
            inputSx={formFieldInputSx}
          />
          <InputController
            isRequired
            name="email"
            title={EMAIL}
            fieldType="email"
            placeholder="Enter Email"
            inputSx={formFieldInputSx}
          />
          <InputController
            isRequired
            isPassword
            name="password"
            title={PASSWORD}
            fieldType="password"
            placeholder="Enter Password"
            inputSx={formFieldInputSx}
          />
        </Box>
        <Box sx={submitButtonWrapperSx}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={loginButtonSx}
          >
            Log In
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
