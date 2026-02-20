import type { InputBaseProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { HTMLInputTypeAttribute, ReactNode } from "react";

type FieldType = HTMLInputTypeAttribute;

export type InputControllerProps = {
  name: string;
  title: string;
  isRequired?: boolean;
  isPassword?: boolean;
  placeholder?: string;
  defaultValue?: string;
  isMultiLine?: boolean;
  fieldType?: FieldType;
  margin?: InputBaseProps["margin"];
  inputAdornmentIcon?: ReactNode;
  minRows?: string;
  maxRows?: string;
  disabled?: boolean;
  inputProps?: string;
  isMultiValue?: boolean;
  size?: InputBaseProps["size"];
  /** Sx applied to the OutlinedInput root (e.g. height, border) */
  inputSx?: SxProps<Theme>;
};
