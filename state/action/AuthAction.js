import { signUpAuth, signinAuthApi } from "../api/auth";
import { setAuthTrue, setAuthFalse } from "../reducers/UserAuth";

export const SignupAction = (userData) => async (dispatch) => {
  try {
    const { data } = await signUpAuth(userData);
    console.log(data, "hero");
  } catch (error) {
    console.log(error.message);
  }
};

export const signinAction = (userData) => async (dispatch) => {
  try {
    const { data } = await signinAuthApi(userData);
    console.log(data, "hero");

    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
      localStorege.setItem("userId", data.user._id);
      localStorege.setItem("userName", data.user.name);
      localStorege.setItem("userEmail", data.user.email);
    }
  } catch (error) {
    console.log(error.message);
  }
};
