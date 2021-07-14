import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "../reducers/FoodSlice";
import HomechefSlice from "../reducers/HomechefSlice";


export default configureStore({
    reducer: {
        food: FoodSlice,
        homechef: HomechefSlice,
    },
});