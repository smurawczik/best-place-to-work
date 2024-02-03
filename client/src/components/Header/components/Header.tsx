import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box flexGrow={1} justifyContent="space-between" display="flex">
          <Box gap={1} display="flex">
            <Link color="white" to="/">
              Home
            </Link>
            <Link color="white" to="/jobs">
              Jobs
            </Link>
          </Box>
          <Link color="white" to="/login">
            Login
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
