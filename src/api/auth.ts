import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cookies } from "react-cookie";
import { removeCookie, setCookie } from "../utils/cookies";
const url = "http://localhost:8001";

// account routes
export const join = (form: {
  nick: String;
  password: String;
  loginId: String;
}) => axios.post(`${url}/auth/join`, form);

const onLoginSuccess = (accessToken: String) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};
export const loginPost = createAsyncThunk(
  "user/login",
  async (form: { loginId: String; password: String }) => {
    const res = await axios.post(`${url}/auth/login`, form);
    const { refreshToken, accessToken, nick, loginId, provider } = res.data;
    onLoginSuccess(accessToken);
    setCookie("refreshToken", refreshToken, { httponly: true });
    return { nick, loginId, provider };
  }
);

export const refreshToken = createAsyncThunk("user/refresh", async () => {
  try {
    const res = await axios.post(
      `${url}/auth/refreshToken`,
      {},
      { withCredentials: true }
    );
    const { accessToken, nick, loginId, provider } = res.data;
    onLoginSuccess(accessToken);
    return { nick, loginId, provider };
  } catch (error) {
    return { nick: null, loginId: null, provider: null };
  }
});

//todo loginPost랑 refreshToken 관련 액션 하나로 합치기

export const logout = createAsyncThunk("user/logout", async () => {
  const res = await axios.get(`${url}/auth/logout`);
  console.log(res);
  removeCookie("refreshToken");
  return;
});

//
export const sample = () => {
  axios.get(`/sample`);
};

export const googleLogin = () => {
  axios.get(`/auth/google`);
};
