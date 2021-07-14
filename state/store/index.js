import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "../reducers/FoodSlice";


export default configureStore({
    reducer: {
        food: FoodSlice,
    },
});