import axios from "axios";

const url = "http://localhost:8001";
const headers = (token) => ({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

// account routes
export const register = (form) => axios.post(`${url}/auth/register`, form);
export const login = (form) => axios.post(`${url}/auth/login`, form);
export const getUser = (token) => axios.get(`${url}/auth`, headers(token));
export const uploadImage = (token, image) =>
  axios.put(`${url}/account/image`, image, headers(token));

//
export const sample = () => {
  axios.get(`/sample`);
};

export const googleLogin = () => {
  axios.get(`/auth/google`);
};
