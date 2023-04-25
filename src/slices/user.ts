import { createSlice } from "@reduxjs/toolkit";
import { loginPost, logout, refreshToken } from "../api/auth";

interface UserState {
  nick: string | null;
  loginId: string | null;
  provider: string | null;
  loading: "pending" | "fulfilled" | "rejected";
}
const initialState: UserState = {
  nick: null,
  loginId: null,
  provider: null,
  loading: "fulfilled",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginPost.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(loginPost.fulfilled, (state, action) => {
      state.nick = action.payload.nick;
      state.loginId = action.payload.loginId;
      state.provider = action.payload.provider;
      state.loading = "fulfilled";
    });
    builder.addCase(loginPost.rejected, (state) => {
      state.loading = "rejected";
    });
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.nick = action.payload.nick;
      state.loginId = action.payload.loginId;
      state.provider = action.payload.provider;
      state.loading = "fulfilled";
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.loading = "rejected";
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.nick = null;
      state.loginId = null;
      state.provider = null;
      state.loading = "fulfilled";
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default userSlice;
