import type { SxProps, Theme } from "@mui/material/styles";

export const HEADER_HEIGHT = 66;

export const appBarSx: SxProps<Theme> = {
  zIndex: 1100,
  height: HEADER_HEIGHT,
  minHeight: HEADER_HEIGHT,
  maxHeight: HEADER_HEIGHT,
  backgroundColor: "#FFFFFF",
  color: "primary.main",
  padding: 0,
};

export const toolbarSx: SxProps<Theme> = {
  minHeight: `${HEADER_HEIGHT}px !important`,
  height: HEADER_HEIGHT,
  maxHeight: HEADER_HEIGHT,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: 0,
  paddingBottom: 0,
  boxSizing: "border-box",
};

export const logoLinkSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  flexShrink: 0,
};

export const navSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 0, md: 1, lg: 3 },
};

export const navLinkSx: SxProps<Theme> = {
  color: "primary.main",
  fontWeight: 500,
  textDecoration: "none",
  px: { md: 1, lg: 1.5 },
  "&:hover": { color: "secondary.main" },
};

export const navCenterSx: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
  minWidth: 0,
};

export const actionsSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  flexShrink: 0,
};

export const signUpButtonSx: SxProps<Theme> = {
  display: { xs: "none", sm: "inline-flex" },
  width: 145,
  minHeight: 55,
  border: "1px solid #142828",
  borderColor: "#142828",
  color: "#142828",
  "&:hover": {
    borderColor: "#142828",
    backgroundColor: "action.hover",
  },
};

export const menuIconButtonSx: SxProps<Theme> = {
  display: { md: "none" },
  color: "primary.main",
};

export const drawerSx: SxProps<Theme> = {
  display: { xs: "block", md: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 280,
    pt: 2,
  },
};
