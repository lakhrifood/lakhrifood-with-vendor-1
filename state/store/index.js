import { configureStore } from "@reduxjs/toolkit";
import { FoodSlice } from "../reducers/FoodSlice";
import { authSlice } from "../reducers/UserAuth";

export default configureStore({
  reducer: {
    food: FoodSlice,
    userAuth: authSlice,
  },
});
