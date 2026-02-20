import type { SxProps, Theme } from "@mui/material/styles";

export const PANEL_HEIGHT = "calc(100vh - 66px)";

// ─── Form Field Styles (layout only, visual overrides in login.css) ─────────

export const formFieldInputSx: SxProps<Theme> = {
  width: "100%",
};

export const loginButtonSx: SxProps<Theme> = {};

export const fieldsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  width: "100%",
};

export const submitButtonWrapperSx: SxProps<Theme> = {
  mt: 4,
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

// ─── Page Layout ────────────────────────────────────────────────────────────

export const loginMainSx: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: PANEL_HEIGHT,
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: PANEL_HEIGHT,
  },
});

// Left image panel: ~48% on desktop, hidden on mobile
export const imageWrapperSx: SxProps<Theme> = (theme) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    width: "48%",
    flexShrink: 0,
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
});

export const imageSx: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
};

// Right form panel: full width on mobile, ~52% on desktop
export const formPanelSx: SxProps<Theme> = (theme) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: { xs: 3, sm: 5 },
  [theme.breakpoints.up("md")]: {
    width: "52%",
    flexShrink: 0,
    px: 8,
    py: 6,
  },
  [theme.breakpoints.up("lg")]: {
    px: 10,
  },
});

export const formContentSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: { xs: "100%", sm: 440 },
};