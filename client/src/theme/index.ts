import { createTheme } from "@mui/material";
import { green, pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});
