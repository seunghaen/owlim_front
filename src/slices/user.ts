import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  nick: string | null;
  loginId: string | null;
  provider: string | null;
}
const initialState: UserState = {
  nick: null,
  loginId: null,
  provider: null,
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
});

export default userSlice;
