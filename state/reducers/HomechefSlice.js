
import { createSlice } from "@reduxjs/toolkit";
export const HomechefSlice = createSlice({
    name: "homechefs",
    initialState: {
        homechefs: [],
        homechef: null,
        popularHomechef: [],
    },
    reducers: {
        getHomeChefs: (state, { payload }) => {
            state.homechefs = payload;
        },
        getHomeChefsByID: (state, { payload }) => {
            state.homechef = payload;
        },
        getPopularHomeChefs: (state, { payload }) => {
            state.popularHomechef = payload;
        }
    },
});

export const { getHomeChefs, getHomeChefsByID, getPopularHomeChefs } = HomechefSlice.actions;
export default HomechefSlice.reducer;