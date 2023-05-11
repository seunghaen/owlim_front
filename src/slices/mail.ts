import { createSlice } from "@reduxjs/toolkit";
import { getMail } from "../api/mail";

export type MailState = {
  title: string;
  createAt: string;
  id: string;
  from: string;
};

interface mailState {
  mailList: MailState[];
  loading: "pending" | "fulfilled" | "rejected";
}
const initialState: mailState = {
  mailList: [],
  loading: "fulfilled",
};
const mailSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMail.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.mailList = action.payload;
    });
    builder.addCase(getMail.rejected, (state) => {
      state.loading = "rejected";
    });
    builder.addCase(getMail.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export default mailSlice;
