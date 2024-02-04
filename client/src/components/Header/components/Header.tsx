import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LinkButton } from "../../UI/LinkButton";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar variant="dense">
        <Box flexGrow={1} justifyContent="space-between" display="flex">
          <Box gap={1} display="flex">
            <LinkButton color="secondary" href="/">
              Home
            </LinkButton>
            <LinkButton color="secondary" href="/jobs">
              Jobs
            </LinkButton>
          </Box>
          <Box gap={1} display="flex">
            <LinkButton variant="outlined" color="secondary" href="/register">
              Register
            </LinkButton>
            <LinkButton variant="outlined" color="secondary" href="/login">
              Login
            </LinkButton>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
