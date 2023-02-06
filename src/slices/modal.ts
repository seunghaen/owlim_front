import { createSlice } from "@reduxjs/toolkit";

export type ModalType = "search" | "setting" | null;

interface ModalState {
  isOpen: boolean;
  type: ModalType;
}
const initialState: ModalState = {
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
