import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => [...state, payload],
    addQuantity: (state, { payload }) => {
      const index = state.findIndex((o) => o.productId === payload.id);
      state[index].quantity += 1;
      console.log(payload);
    },
    reduceQuantity: (state, { payload }) => {
      const index = state.findIndex((o) => o.productId === payload.id);
      state[index].quantity -= 1;
      console.log(payload);
    },
    removeOrder: (state, { payload }) => {
      const index = state.findIndex((o) => o.id === payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addOrder, addQuantity, reduceQuantity, removeOrder } =
  OrderSlice.actions;
export default OrderSlice.reducer;
