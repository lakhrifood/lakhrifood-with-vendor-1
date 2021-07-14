
import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
    name: "room",
    initialState: {
        foods: [],
        food: null,
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
        },
        getFoodByID: (state, { payload }) => {
            state.food = payload;
        }
    },
});

export const { getFoods, getFoodsByCategory, getFoodByRating, getFoodByID } = FoodSlice.actions;
export default FoodSlice.reducer;