import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginboxFieldsxProp } from "../Signup/style";

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (password.length < 8 || !password.match(passwordRegEx) === null) {
      setPasswordError("비밀번호 규칙을 확인하세요.");
    } else {
      setPasswordError("");
      //여기 로그인 axios 로직 넣기
    }
  };

  const isSubmitDisabled = !(userId && password && !passwordError);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box>
        <TextField
          type="text"
          id="userId"
          label="아이디"
          required
          color="secondary"
          value={userId}
          sx={loginboxFieldsxProp}
          onChange={(event) => setUserId(event.target.value)}
        />
      </Box>
      <Box>
        <TextField
          type="password"
          id="password"
          label="비밀번호"
          color="secondary"
          required
          value={password}
          sx={loginboxFieldsxProp}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Box>
      {passwordError && (
        <Box style={{ color: "red" }}>
          <Typography>{passwordError}</Typography>
        </Box>
      )}
      <Button color="secondary" type="submit" disabled={isSubmitDisabled}>
        로그인
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
    </Box>
  );
}

export default LoginForm;
