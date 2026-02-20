import type { SxProps, Theme } from "@mui/material/styles";

export const mainSx: SxProps<Theme> = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  py: 4,
};

export const formPanelSx: SxProps<Theme> = {
  backgroundColor: "#F3F3F3",
  p: { xs: 3, sm: 6, md: 8 },
  borderRadius: "4px",
  width: "95%", // Mobile responsive
  maxWidth: "720px", // Figma Width
  margin: "0 auto",
};

export const registerCaptionSx: SxProps<Theme> = {
  color: "#f9a825",
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "0.1em",
  mb: 0.5,
  textTransform: "uppercase",
};

export const headerSx: SxProps<Theme> = {
  fontWeight: 800,
  fontSize: { xs: "2rem", md: "3rem" }, // Figma mein ye kafi bold aur bara hai
  color: "#1a2e2c",
  mb: 0.5,
  lineHeight: 1.1,
  textTransform: "none", // Ensure it's not all caps if not needed
};

export const subHeaderSx: SxProps<Theme> = {
  color: "#666",
  fontSize: "14px",
  mb: 4,
};

export const formFieldInputSx: SxProps<Theme> = {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  mt: 1, // Label aur input k darmiyan gap k liye
  "& .MuiOutlinedInput-notchedOutline": { 
    borderColor: "#e0e0e0", 
  },
  "& .MuiInputBase-input": {
    padding: "14px 16px", // Thora padding barha diya figma k mutabiq
    fontSize: "14px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { 
    borderColor: "#1a2e2c",
    borderWidth: "1.5px" 
  },
};

export const loginButtonSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 280,
  height: "54px",
  backgroundColor: "#112221",
  color: "#fff",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: "4px",
  "&:hover": { backgroundColor: "#0a1615" },
};

export const submitButtonWrapperSx: SxProps<Theme> = {
  mt: 4,
  display: "flex",
  justifyContent: "center",
};

export const dividerSx: SxProps<Theme> = {
  my: 4,
  borderColor: "#ddd",
  width: "100%",
};

export const bottomLinkWrapperSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
};

export const signUpTextWrapperSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

export const signUpLinkSx: SxProps<Theme> = {
  color: "#f9a825",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "14px",
  "&:hover": { textDecoration: "underline" },
};