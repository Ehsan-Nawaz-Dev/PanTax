import type { FC } from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { InputControllerProps } from "@interfaces/index";
import { cursorPointerSx } from "@styles/components/inputController.styles";

const InputController: FC<InputControllerProps> = ({
  name,
  size,
  title,
  minRows,
  maxRows,
  disabled,
  fieldType,
  isPassword,
  isRequired,
  isMultiLine,
  placeholder,
  defaultValue,
  margin = "dense",
  inputAdornmentIcon,
  inputSx,
}) => {
  const [show, setShow] = useState(false);

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { name, onBlur, onChange, value, ref } = field;
        const { error } = fieldState;
        const { message } = error || {};
        return (
          <FormControl fullWidth error={Boolean(error)} variant="outlined">
            <FormLabel
              htmlFor={name}
              sx={{
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "#1a1a1a",
                mb: 0.75,
                "&.Mui-focused": {
                  color: "#1a1a1a",
                },
              }}
            >
              {isRequired ? `${title} *` : title}
            </FormLabel>
            <OutlinedInput
              ref={ref}
              id={name}
              fullWidth
              name={name}
              size={size}
              value={value}
              margin={margin}
              onBlur={onBlur}
              maxRows={maxRows}
              minRows={minRows}
              autoComplete="off"
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
              multiline={isMultiLine}
              placeholder={placeholder}
              defaultValue={defaultValue}
              type={isPassword ? (show ? "text" : "password") : fieldType}
              sx={inputSx}
              endAdornment={
                isPassword ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={cursorPointerSx}
                    onClick={() => setShow(!show)}
                  >
                    {show ? (
                      <VisibilityOff color="primary" />
                    ) : (
                      <Visibility color="primary" />
                    )}
                  </Box>
                ) : (
                  inputAdornmentIcon
                )
              }
            />
            <FormHelperText error={Boolean(error)}>{message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default InputController;
