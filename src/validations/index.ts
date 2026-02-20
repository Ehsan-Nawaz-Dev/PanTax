import * as yup from "yup";
import type { ObjectSchema } from "yup";
// interfaces
import type { LoginForm, RegisterForm } from "@interfaces/formTypes";
// validations
import { isEmailValid, isPasswordValid, isEFINValid } from "./common";

export const loginValidationSchema: ObjectSchema<LoginForm> = yup
  .object()
  .shape({
    email: isEmailValid(),
    password: isPasswordValid(),
    efin: isEFINValid(),
  });

export const registerValidationSchema: ObjectSchema<RegisterForm> = yup
  .object()
  .shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: isEmailValid(),
    companyName: yup.string().required("Company Name is required"),
    efin: isEFINValid(),
  });
