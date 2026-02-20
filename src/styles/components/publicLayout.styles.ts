import type { SxProps, Theme } from "@mui/material/styles";

export const rootSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
};

export const mainSx: SxProps<Theme> = {
  flex: 1,
  minHeight: 0,
  width: "100%",
  boxSizing: "border-box",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};
