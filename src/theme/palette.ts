import type {
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customWhiteColor: PaletteColor;
  }

  interface PaletteOptions {
    customWhiteColor?: PaletteColorOptions;
  }
}

const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#142828",
  },

  secondary: {
    main: "#FFA710",
  },

  common: {
    white: "#ffffff",
    black: "#000000",
  },

  // custom colors

  customWhiteColor: {
    main: "#FAFAFA",
    dark: "#A3A3A3",
  },
};

export default palette;
