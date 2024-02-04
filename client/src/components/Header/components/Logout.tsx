import { Button } from "@mui/material";
import { authAPI } from "../../../api/auth";

export const Logout = () => {
  const onLogout = async () => {
    try {
      await authAPI.logout();
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="outlined" color="secondary" onClick={onLogout}>
      Logout
    </Button>
  );
};
