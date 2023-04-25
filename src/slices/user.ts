import { createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/auth";

interface UserState {
  nick: string | null;
  loginId: string | null;
  provider: string | null;
  loading: boolean;
  error: boolean;
}
const initialState: UserState = {
  nick: null,
  loginId: null,
  provider: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.nick = action.payload.nick;
      state.loginId = action.payload.loginId;
      state.provider = action.payload.provider;
    },
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginPost.fulfilled, (state, action) => {
      state.nick = action.payload.nick;
      state.loginId = action.payload.loginId;
      state.provider = action.payload.provider;
      state.loading = false;
    });
    builder.addCase(loginPost.rejected, (state) => {
      state.error = true;
    });
  },
});

export default userSlice;
