import { addOrder } from "../reducers/OrderSlice";

import { CreateOrderApi, getOrderByUserID } from "../Api/order";

export const AddOrderCartAction = (orderDetailes) => async (dispatch) => {
  try {
    dispatch(addOrder(orderDetailes));
  } catch (error) {
    console.error(error.message);
  }
};

export const createOrderAction = (orderDetailes) => async (dispatch) => {
  try {
    console.log("calling order");
    await CreateOrderApi(orderDetailes);
  } catch (error) {
    console.error(error.message);
  }
};

export const getOrdersAction = (userID) => async (dispatch) => {
  try {
    const order = await getOrderByUserID(userID);
    return order;
  } catch (error) {
    console.error(error.message);
  }
};
