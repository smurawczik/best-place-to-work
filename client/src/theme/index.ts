import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    accent: {
      main: string;
    };
  }
  interface ThemeOptions {
    accent?: {
      main?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: "#4B3869",
      paper: "#664E88",
    },
    text: {
      primary: "#A9E4D7",
      secondary: "#F5F5F5",
    },
    primary: {
      main: "#63B4B8",
    },
    secondary: {
      main: "#A9E4D7",
    },
  },
  accent: {
    main: "#F6B17A",
  },
});
