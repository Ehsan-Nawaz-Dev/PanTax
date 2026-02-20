import type { Palette } from "@mui/material";
import { PRIMARY_FONT, SECONDARY_FONT } from "@constants/fonts";

const typography = (palette: Palette) => ({
  fontFamily: PRIMARY_FONT,

  body1: {
    fontSize: 16,
    fontWeight: 400,
    color: palette.primary.main,
  },

  body2: {
    fontSize: 16,
    fontWeight: 500,
  },

  caption: {
    fontSize: 14,
    fontWeight: 400,
  },

  h1: {
    fontFamily: SECONDARY_FONT,
    fontSize: 48,
    fontWeight: 700,
    color: palette.primary.main,
  },

  h1_secondary: {
    fontSize: 48,
    fontWeight: 700,
    color: palette.secondary.main,
    fontFamily: SECONDARY_FONT,
  },

  h2: {
    fontSize: 24,
    fontWeight: 700,
    color: palette.primary.main,
  },

  h3: {
    fontSize: 32,
    fontWeight: 900,
    fontFamily: SECONDARY_FONT,
    color: palette.primary.main,
    textTransform: "uppercase" as const,
  },

  h5: {
    fontSize: 24,
    fontWeight: 700,
    color: palette.primary.main,
    fontFamily: SECONDARY_FONT,
  },

  h6: {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: SECONDARY_FONT,
  },

  subtitle1: {
    fontSize: 16,
    fontWeight: 400,
  },

  subtitle2: {
    fontSize: 14,
    fontWeight: 600,
    color: palette.primary.main,
  },
});

export default typography;
