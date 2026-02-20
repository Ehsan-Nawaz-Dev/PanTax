import type { SxProps, Theme } from "@mui/material/styles";

export const PANEL_HEIGHT = "calc(100vh - 64px)";

export const formFieldInputSx: SxProps<Theme> = {
  width: "100%",
  "& .MuiInputBase-root": {
    height: { xs: 46, md: 50 },
    borderRadius: "6px",
    backgroundColor: "#fff",
    fontSize: "0.9rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ddd",
  },
};

export const loginButtonSx: SxProps<Theme> = {
  width: "100%",
  height: { xs: 48, md: 52 },
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "6px",
  boxShadow: "none",
  backgroundColor: "#1B3A2D",
  "&:hover": {
    backgroundColor: "#142d23",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
  },
};

export const fieldsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: { xs: 2, md: 2.5 },
  width: "100%",
};

export const submitButtonWrapperSx: SxProps<Theme> = {
  mt: { xs: 3, md: 3.5 },
  width: "100%",
};

// ─── Page Layout ────────────────────────────────────────────────────────────

export const loginMainSx: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: PANEL_HEIGHT,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: PANEL_HEIGHT,
    overflow: "hidden",
  },
});

// Left image panel: 50% on desktop, hidden on mobile
export const imageWrapperSx: SxProps<Theme> = (theme) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    width: "50%",
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

// Right form panel: full width on mobile, 50% on desktop
export const formPanelSx: SxProps<Theme> = (theme) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
  overflowY: "auto",
  p: { xs: 3, sm: 5 },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    flexShrink: 0,
    p: 6,
  },
  [theme.breakpoints.up("lg")]: {
    p: 8,
  },
});

export const formContentSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: { xs: "100%", sm: 460 },
};

// ─── Typography ─────────────────────────────────────────────────────────────

export const welcomeCaptionSx: SxProps<Theme> = {
  color: "#C4A04B", // golden/amber accent matching Figma "WELCOME" label
  fontWeight: 600,
  fontSize: "0.7rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  display: "block",
  mb: 0.75,
};

export const titleSx: SxProps<Theme> = {
  fontSize: { xs: "2rem", md: "2.4rem" },
  fontWeight: 700,
  color: "#1a1a1a",
  lineHeight: 1.1,
  mb: 0.75,
};

export const subtitleSx: SxProps<Theme> = {
  color: "#777",
  fontSize: "0.875rem",
  mb: { xs: 3, md: 3.5 },
};

// ─── Bottom Links ────────────────────────────────────────────────────────────

export const dividerSx: SxProps<Theme> = {
  my: { xs: 2.5, md: 3 },
  borderColor: "#e0e0e0",
};

export const linksWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", sm: "center" },
  gap: 1.5,
};

export const forgotPasswordLinkSx: SxProps<Theme> = {
  color: "#555",
  fontSize: "0.875rem",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline", color: "#333" },
};

export const signUpLinkSx: SxProps<Theme> = {
  color: "#C4A04B",
  fontWeight: 600,
  fontSize: "0.875rem",
  textDecoration: "none",
  ml: 0.5,
  "&:hover": { textDecoration: "underline" },
};

export const signUpTextWrapperSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};