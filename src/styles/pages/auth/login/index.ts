import type { SxProps, Theme } from "@mui/material/styles";

export const PANEL_HEIGHT = "calc(100vh - 66px)";

// ─── Form Field Styles ──────────────────────────────────────────────────────

export const formFieldInputSx: SxProps<Theme> = {
  width: "100%",
  "& .MuiInputBase-root": {
    height: 50,
    borderRadius: "4px",
    backgroundColor: "#fff",
    fontSize: "0.875rem",
    fontWeight: 400,
    color: "#333",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e0e0e0",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#bbb",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#aaa",
    opacity: 1,
    fontSize: "0.875rem",
  },
};

export const formLabelSx: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "0.875rem",
  color: "#1a1a1a",
  mb: 0.75,
};

export const loginButtonSx: SxProps<Theme> = {
  width: 220,
  height: 50,
  textTransform: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  borderRadius: "4px",
  boxShadow: "none",
  backgroundColor: "#1B3A2D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#142d23",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
  },
};

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
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: PANEL_HEIGHT,
    overflow: "hidden",
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
  backgroundColor: "#f5f5f5",
  overflowY: "auto",
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

// ─── Typography ─────────────────────────────────────────────────────────────

export const welcomeCaptionSx: SxProps<Theme> = {
  color: "#E8A317",
  fontWeight: 700,
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  display: "block",
  mb: 1,
};

export const titleSx: SxProps<Theme> = {
  fontSize: { xs: "2rem", md: "2.5rem" },
  fontWeight: 700,
  color: "#1a1a1a",
  lineHeight: 1.15,
  mb: 0.75,
};

export const subtitleSx: SxProps<Theme> = {
  color: "#777",
  fontSize: "0.875rem",
  fontWeight: 400,
  mb: 4,
};

// ─── Bottom Links ────────────────────────────────────────────────────────────

export const dividerSx: SxProps<Theme> = {
  my: 3,
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
  color: "#333",
  fontSize: "0.875rem",
  fontWeight: 500,
  textDecoration: "none",
  "&:hover": { textDecoration: "underline", color: "#111" },
};

export const signUpLinkSx: SxProps<Theme> = {
  color: "#E8A317",
  fontWeight: 700,
  fontSize: "0.875rem",
  textDecoration: "none",
  ml: 0.5,
  "&:hover": { textDecoration: "underline" },
};

export const signUpTextWrapperSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};