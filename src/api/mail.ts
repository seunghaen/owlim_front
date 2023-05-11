import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MailState } from "../slices/mail";

const url = "http://localhost:8001";

export const getMail = createAsyncThunk("mail/get", async () => {
  try {
    const res = await axios.get(`${url}/email/get`);
    let mailList: MailState[] = [];
    console.log(res.data);
    res.data.mails.map((element: MailState) => {
      mailList.push(element);
    });
    return mailList;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getMailHtml = (id: string) => {
  return axios.get(`${url}/email/read/${id}`);
};
