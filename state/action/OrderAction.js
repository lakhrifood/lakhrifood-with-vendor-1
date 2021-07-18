import { addOrder, emptyOrder } from "../reducers/OrderSlice";

import {
  CreateOrderApi,
  getOrderByUserID,
  getOrderDiscountByPromoCode,
} from "../Api/order";
import { setDiscount, removeDiscount } from "../reducers/FoodSlice";

export const setDiscountbyPromoCode = (promoCode) => {
  return async (dispatch, getState) => {
    const { data } = await getOrderDiscountByPromoCode(promoCode);
    console.log(data, "distrpppp");
    if (data) {
      dispatch(setDiscount(data.discount));
    }
  };
};
export const AddOrderCartAction = (orderDetailes) => async (dispatch) => {
  try {
    dispatch(addOrder(orderDetailes));
  } catch (error) {
    console.error(error.message);
  }
};

export const createOrderAction = (orderDetailes) => async (dispatch) => {
  try {
    await CreateOrderApi(orderDetailes).then(() => {
      dispatch(removeDiscount());
      dispatch(emptyOrder());
    });
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
