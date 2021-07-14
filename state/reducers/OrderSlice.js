import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => [...state, payload],
    // editOrder: (state, { payload }) => {
    //   const index = state.findIndex(o => o.id === payload.id);
    //     state[index].roomMembers = payload.roomMembers;
    // },
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
  },
});

export const { addOrder, addQuantity, reduceQuantity } = OrderSlice.actions;
export default OrderSlice.reducer;
