import type { ThemeOptions } from "@mui/material";
// import { snackbarContentClasses } from "@mui/material/SnackbarContent";
// theme

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: ({ palette, spacing }) => ({
      html: {
        margin: 0,
        padding: 0,
        WebkitFontSmoothing: "auto",
      },

      // "*": {
      //   boxSizing: "border-box",

      //   "&:focus-visible": {
      //     outline: spacing(0),
      //   },

      //   "&::-webkit-scrollbar": {
      //     width: spacing(0.6),
      //     height: spacing(1),
      //   },

      //   "&::-webkit-scrollbar-thumb": {
      //     borderRadius: spacing(2.5),
      //     backgroundColor: palette.primary.main,
      //   },
      // },

      body: {
        margin: spacing(0),
        padding: spacing(0),
        backgroundColor: palette.secondary.main,
        overflowX: "hidden",
      },

      "#root": {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      },

      // [`& .${snackbarContentClasses.root}`]: {
      //   flexWrap: "initial !important",
      //   justifyContent: "space-between !important",
      //   padding: `${spacing(0.5, 1.2)} !important`,
      // },

      // [`& .${snackbarContentClasses.action}`]: {
      //   margin: `${spacing(0)} !important`,
      //   padding: `${spacing(0)} !important`,
      // },
    }),
  },
};

export default components;
