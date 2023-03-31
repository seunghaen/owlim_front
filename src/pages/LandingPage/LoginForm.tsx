import { Button } from "@mui/material";
import React from "react";

function LoginForm() {
  const googleLoginHandler = () => {
    window.open("http://localhost:8001/auth/google", "_self");
  };
  return (
    <Button
      sx={{ color: "white", backgroundColor: "red" }}
      size="medium"
      variant="contained"
      onClick={googleLoginHandler}
    >
      구글 로그인
    </Button>
  );
}

export default LoginForm;
