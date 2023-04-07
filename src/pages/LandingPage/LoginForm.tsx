import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import userSlice from "../../slices/user";
import { useAppDispatch } from "../../store";
import { loginboxFieldsxProp } from "../Signup/style";

function LoginForm() {
  const dispatch = useAppDispatch();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    if (password.length < 8 || !password.match(passwordRegEx) === null) {
      setPasswordError("비밀번호 규칙을 확인하세요.");
    } else {
      setPasswordError("");
      const form = {
        loginId: loginId,
        password,
      };
      try {
        const res = await login(form);
        console.log(res);
        dispatch(
          userSlice.actions.login({
            nick: res.data.nick,
            loginId: res.data.loginId,
            provider: res.data.provider,
          })
        );
      } catch (error) {}
    }
  };

  const isSubmitDisabled = !(loginId && password && !passwordError);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box>
        <TextField
          type="text"
          id="loginId"
          label="아이디"
          required
          color="secondary"
          value={loginId}
          sx={loginboxFieldsxProp}
          onChange={(event) => setLoginId(event.target.value)}
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
