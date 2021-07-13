
import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
    name: "room",
    initialState: {
        foods: [],
    },
    reducers: {
        getFoods: (state, { payload }) => {
            state.rooms = payload;
        },
    },
});

export const { getFoods } = FoodSlice.actions;
export default FoodSlice.reducer;