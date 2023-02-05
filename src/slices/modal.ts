import { createSlice } from "@reduxjs/toolkit";

type Modaltype = "search" | "setting" | null;

interface Modal {
  isOpen: boolean;
  type: Modaltype;
}
const initialState: Modal = {
  isOpen: false,
  type: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modalOpen: (state, action) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    modalClose: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export default modalSlice;
