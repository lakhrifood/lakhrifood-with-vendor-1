import axios from "axios";
const base_url = "https://peaceful-citadel-48843.herokuapp.com/auth/user/signup";

export const signUpAuth = async (userInfo) =>
  await axios.post(base_url, userInfo);

export const signinAuthApi = async (userInfo) =>
  axios.post("https://peaceful-citadel-48843.herokuapp.com/auth/user/signin", userInfo);
