import React, { useState } from "react";
import { TextField, Button, styled, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
});

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        margin="normal"
        color="secondary"
        size="small"
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" style={{ cursor: "pointer" }}>
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
        color="secondary"
      >
        Login
      </Button>
    </StyledForm>
  );
};
