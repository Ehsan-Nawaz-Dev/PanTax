import { TOKEN } from "@constants/index";
import { APP_ROUTES } from "@constants/routes";

/*
===========================================================================================
                                Token functions
=========================================================================================== 
*/

export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (token: string) => localStorage.setItem(TOKEN, token);
export const clearToken = () => localStorage.setItem(TOKEN, "");

export const handleLogout = () => {
  localStorage.removeItem(TOKEN);
  // client.clearStore();
  window.location.href = APP_ROUTES.LOGIN;
};

/*
===========================================================================================
                                Validation functions
=========================================================================================== 
*/

export const requiredMessage = (label: string) => `${label} is required`;
export const invalidMessage = (label: string) => `${label} is not a valid`;
export const minMessage = (label: string, value: number) =>
  `${label} should minimun ${value} characters`;
export const maxMessage = (label: string, value: number) =>
  `${label} should maximum ${value} characters`;
export const digitsMessage = (label: string, value: number) =>
  `${label} must be ${value} digits long`;
