import type { LoginForm, RegisterForm } from "@interfaces/formTypes";

export const loginFormInitialValues: LoginForm = {
  efin: "",
  email: "",
  password: "",
};

export const registerFormInitialValues: RegisterForm = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  efin: "",
};
