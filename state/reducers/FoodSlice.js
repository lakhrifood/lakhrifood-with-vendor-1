
import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
    name: "room",
    initialState: {
        foods: [],
    },
    reducers: {
        getRooms: (state, { payload }) => {
            state.rooms = payload;
        },
    },
});

export const { getRooms } = FoodSlice.actions;
export default FoodSlice.reducer;