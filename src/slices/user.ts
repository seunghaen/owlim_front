import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  nick: string | null;
  email: string | null;
  provider: string | null;
}
const initialState: UserState = {
  nick: null,
  email: null,
  provider: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.nick = action.payload.nick;
      state.email = action.payload.email;
      state.provider = action.payload.provider;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export default userSlice;
