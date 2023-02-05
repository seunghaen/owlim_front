import { createSlice } from "@reduxjs/toolkit";

type Modaltype = "search" | "setting" | null;

interface Modal {
  open: boolean;
  type: Modaltype;
}
const initialState: Modal = {
  open: false,
  type: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modalOpen: (state, action) => {
      state.open = true;
      state.type = action.payload;
    },
    modalClose: (state, action) => {
      state.open = false;
      state.type = null;
    },
  },
});

export default modalSlice;
