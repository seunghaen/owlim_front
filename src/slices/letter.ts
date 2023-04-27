import { createSlice } from "@reduxjs/toolkit";
import { getLetter } from "../api/letter";

export type LetterType = {
  name: string;
  desc: string;
  imgUrl: string;
  type: string | null;
  address: string;
  id: number;
};

type LetterState = {
  letterList: LetterType[];
  loading: "pending" | "fulfilled" | "rejected";
};
const initialState: LetterState = {
  letterList: [],
  loading: "fulfilled",
};
const letterSlice = createSlice({
  name: "letter",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLetter.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getLetter.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.letterList = action.payload;
    });
    builder.addCase(getLetter.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export default letterSlice;
