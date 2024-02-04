import React, { useState } from "react";
import { TextField, Button, styled, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { authAPI } from "../../../api/auth";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
});

export const LoginForm = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here
    try {
      const loginResponse = await authAPI.login(email, password);
      console.log(loginResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        color="secondary"
        size="small"
        type="email"
        required
      />
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        color="secondary"
        size="small"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ cursor: "pointer" }}
              sx={{ color: (theme) => theme.palette.primary.light }}
            >
              {showPassword ? (
                <VisibilityOff onClick={handleTogglePasswordVisibility} />
              ) : (
                <Visibility onClick={handleTogglePasswordVisibility} />
              )}
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation
        color="primary"
      >
        Login
      </Button>
    </StyledForm>
  );
};
