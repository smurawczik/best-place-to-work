import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useAppSelector } from "../../../redux/store.hooks";
import { LinkButton } from "../../UI/LinkButton";
import { Logout } from "./Logout";
import { userSelectors } from "../../../redux/user/user.slice.selectors";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Header = () => {
  const userStatus = useAppSelector(userSelectors.selectStatus);
  const authSuccess = userStatus === "succeeded";
  const authFailed = userStatus === "failed";

  return (
    <StyledAppBar position="static" sx={{ zIndex: 2 }}>
      <Toolbar variant="dense">
        <Box flexGrow={1} justifyContent="space-between" display="flex">
          <Box gap={1} display="flex">
            <LinkButton color="secondary" href="/">
              Home
            </LinkButton>
            <LinkButton color="secondary" href="/jobs">
              Jobs
            </LinkButton>

            <LinkButton color="secondary" href="/reviews">
              Reviews
            </LinkButton>
          </Box>
          <Box gap={1} display="flex">
            {authFailed && (
              <>
                <LinkButton
                  variant="outlined"
                  color="secondary"
                  href="/register"
                >
                  Register
                </LinkButton>
                <LinkButton variant="outlined" color="secondary" href="/login">
                  Login
                </LinkButton>
              </>
            )}
            {authSuccess && <Logout />}
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
