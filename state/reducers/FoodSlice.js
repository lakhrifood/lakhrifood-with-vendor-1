
import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
    name: "food",
    initialState: {
        foods: [],
        food: null,
        popularFoods: [],
        recommendedFoods: [],
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
        getFoodsByPriceFilter: (state, { payload }) => {
            state.foods = payload;
        },
        getFoodsBySearch: (state, { payload }) => {
            state.foods = payload;
        },
        getFoodByID: (state, { payload }) => {
            state.food = payload;
        },
        getPopularFoods: (state, { payload }) => {
            state.popularFoods = payload;
        },
        setRecommendedFoods: (state, { payload }) => {
            state.recommendedFoods = payload;
        }
    },
});

export const { getFoods, setRecommendedFoods, getPopularFoods, getFoodsByCategory, getFoodByRating, getFoodByID, getFoodsByPriceFilter, getFoodsBySearch } = FoodSlice.actions;
export default FoodSlice.reducer;