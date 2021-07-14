import axios from "axios";
const base_url = "http://localhost:5000/auth/user/signup";

export const signUpAuth = async (userInfo) =>
  await axios.post(base_url, userInfo);

export const signinAuthApi = async (userInfo) =>
  axios.post("http://localhost:5000/auth/user/signin", userInfo);
