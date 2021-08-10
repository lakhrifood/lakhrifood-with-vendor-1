import axios from "axios";
const base_url = "https://peaceful-citadel-48843.herokuapp.com/auth/user/signup";
const base_url_vendor = "https://peaceful-citadel-48843.herokuapp.com/auth/business/signup";

export const signUpAuth = async (userInfo) =>
  await axios.post(base_url, userInfo);

export const signUpAuthForVendor = async (userInfo) =>
  await axios.post(base_url_vendor, userInfo);

export const signinAuthApi = async (userInfo) =>
  axios.post("https://peaceful-citadel-48843.herokuapp.com/auth/user/signin", userInfo);

export const signInGoogleApi = async (token) =>
  axios.post("http://localhost:5000/auth/google/signin", { token: token });

export const signinAuthApiForVendor = async (userInfo) =>
  axios.post("https://peaceful-citadel-48843.herokuapp.com/auth/business/signin", userInfo);
