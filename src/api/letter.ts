import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LetterType } from "../slices/letter";
const url = "http://localhost:8001";

export const getLetter = createAsyncThunk("letter/get", async () => {
  const res = await axios(`${url}/letter/get`);
  const letterList = res.data.letters;
  return letterList;
});
