import { createTheme } from "@mui/material";
import { green, pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[200],
    },
    secondary: {
      main: green[500],
    },
  },
});
