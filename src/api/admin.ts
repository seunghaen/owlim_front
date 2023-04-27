import axios from "axios";
const url = "http://localhost:8001";

export const imgUpload = (target: FormData) => {
  return axios.post(`${url}/letter/img`, target, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const uploadLetter = (target: FormData) => {
  return axios.post(`${url}/letter/upload`, target, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
