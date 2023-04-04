import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { join } from "../../api";
import LandingPageGrid from "../../UI/LandingPageGrid";
import { loginboxFieldsxProp } from "./style";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else if (password.length < 8 || !password.match(passwordRegEx) === null) {
      setPasswordError("비밀번호 규칙을 확인하세요.");
    } else {
      setPasswordError("");
      const form = {
        nick: username,
        password,
        loginId: userId,
      };
      console.log(form);
      join(form).then((res) => {
        if (res.data.code === 200) {
          navigate("/");
        }
      });
    }
  };

  const isSubmitDisabled = !(
    userId &&
    username &&
    password &&
    passwordConfirm &&
    !passwordError
  );

  return (
    <LandingPageGrid>
      <Box component="form" onSubmit={handleSubmit}>
        <Box>
          <TextField
            type="text"
            id="username"
            label="닉네임"
            required
            color="secondary"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            sx={loginboxFieldsxProp}
          />
        </Box>
        <Box>
          <TextField
            type="text"
            id="userId"
            label="아이디"
            required
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            sx={loginboxFieldsxProp}
          />
        </Box>
        <Box>
          <TextField
            type="password"
            id="password"
            label="비밀번호"
            value={password}
            required
            color="secondary"
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError("");
            }}
            sx={loginboxFieldsxProp}
          />
          <Typography sx={{ fontSize: "0.8rem" }}>
            비밀번호는 8자이상, 특수문자를 포함해야 합니다.
          </Typography>
        </Box>
        <Box>
          <TextField
            type="password"
            id="passwordConfirm"
            label="비밀번호 확인"
            required
            color="secondary"
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
              setPasswordError("");
            }}
            sx={loginboxFieldsxProp}
          />
        </Box>
        {passwordError && (
          <Box style={{ color: "red" }}>
            <Typography>{passwordError}</Typography>
          </Box>
        )}
        <Button color="secondary" type="submit" disabled={isSubmitDisabled}>
          회원가입
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          돌아가기
        </Button>
      </Box>
    </LandingPageGrid>
  );
}

export default SignUp;
