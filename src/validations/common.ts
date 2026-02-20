import * as yup from "yup";
// constants
import { EMAIL_REGEX, EFIN_REGEX } from "@constants/regex";
import { EMAIL, PASSWORD, EFIN } from "@constants/constants";
// helpers
import {
  invalidMessage,
  requiredMessage,
  minMessage,
  maxMessage,
  digitsMessage,
} from "@lib/helper";

export const isEmailValid = (email = EMAIL) =>
  yup
    .string()
    .email(invalidMessage(email))
    .required(requiredMessage(email))
    .matches(EMAIL_REGEX, invalidMessage(email));

export const isPasswordValid = (password = PASSWORD) =>
  yup
    .string()
    .min(8, minMessage(password, 8))
    .max(32, maxMessage(password, 32))
    .required(requiredMessage(password));

export const isEFINValid = (efin = EFIN) =>
  yup
    .string()
    .required(requiredMessage(efin))
    .matches(EFIN_REGEX, digitsMessage(efin, 9));
