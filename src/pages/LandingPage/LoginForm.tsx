import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // Perform authentication here
    if (username === "example" && password === "password!123") {
      setLoggedIn(true);
    } else {
      setPasswordError("Incorrect username or password");
    }
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);

    if (
      event.target.value.length < 9 ||
      event.target.value.match(passwordRegEx) === null
    ) {
      setPasswordError(
        "Password must be at least 9 characters long and contain an exclamation mark."
      );
    } else {
      setPasswordError("");
    }
  };

  const isSubmitDisabled = !(username && password && !passwordError);

  if (loggedIn) {
    return <div>You are logged in!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <label htmlFor="username">
          <Typography>ID</Typography>
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Box>
      <Box>
        <label htmlFor="password">
          <Typography>password</Typography>
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>
      {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      <Button color="primary" type="submit" disabled={isSubmitDisabled}>
        Log In
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default Login;
