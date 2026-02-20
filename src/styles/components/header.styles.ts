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
  borderBottom: "1px solid #f0f0f0",
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
  paddingLeft: "24px",
  paddingRight: "24px",
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
  color: "#333",
  fontWeight: 500,
  fontSize: "0.9rem",
  textDecoration: "none",
  px: { md: 1, lg: 1.5 },
  "&:hover": { color: "#E8A317" },
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
  width: 130,
  minHeight: 44,
  border: "1.5px solid #142828",
  borderRadius: "4px",
  borderColor: "#142828",
  color: "#142828",
  fontWeight: 600,
  fontSize: "0.875rem",
  textTransform: "none",
  "&:hover": {
    borderColor: "#142828",
    backgroundColor: "rgba(20, 40, 40, 0.04)",
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
