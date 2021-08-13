import { createSlice } from "@reduxjs/toolkit";
export const FoodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    food: null,
    popularFoods: [],
    recommendedFoods: [],
    orderFood: null,
    globalDiscount: 0,
    promoMsg: "",
  },
  reducers: {
    getFoods: (state, { payload }) => {
      state.foods = payload;
    },
    getFoodsByCategory: (state, { payload }) => {
      state.foods = payload;
    },
    getFoodsByDiscount: (state, { payload }) => {
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
    getOrderFoodById: (state, { payload }) => {
      state.orderFood = payload;
    },
    getPopularFoods: (state, { payload }) => {
      state.popularFoods = payload;
    },
    setRecommendedFoods: (state, { payload }) => {
      state.recommendedFoods = payload;
    },
    setDiscount: (state, { payload }) => {
      state.globalDiscount = payload;
    },
    setPromoMsg: (state, { payload }) => {
      state.promoMsg = payload;
    },
    removeDiscount: (state, { payload }) => {
      state.globalDiscount = 0;
    },
  },
});

export const {
  getFoods,
  setRecommendedFoods,
  getPopularFoods,
  getFoodsByCategory,
  getFoodsByDiscount,
  getFoodByRating,
  getFoodByID,
  getFoodsByPriceFilter,
  getFoodsBySearch,
  getOrderFoodById,
  setDiscount,
  setPromoMsg,
  removeDiscount,
} = FoodSlice.actions;
export default FoodSlice.reducer;
