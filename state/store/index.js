import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../reducers/UserAuth";

import FoodSlice from "../reducers/FoodSlice";

export default configureStore({
  reducer: {
    food: FoodSlice,
    userAuth: authSlice,
  },
});
