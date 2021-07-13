
import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
    name: "room",
    initialState: {
        foods: [],
    },
    reducers: {
        getFoods: (state, { payload }) => {
            state.foods = payload;
        },
        getFoodsByCategory: (state, { payload }) => {
            state.foods = payload;
        },
        getFoodByRating: (state, { payload }) => {
            state.foods = payload;
        }
    },
});

export const { getFoods, getFoodsByCategory, getFoodByRating } = FoodSlice.actions;
export default FoodSlice.reducer;