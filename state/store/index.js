import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../reducers/UserAuth";

import FoodSlice from "../reducers/FoodSlice";

import orderSlice from "../reducers/OrderSlice";

export default configureStore({
  reducer: {
    food: FoodSlice,
    userAuth: authSlice,
    order: orderSlice,
  },
});