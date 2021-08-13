import { addOrder, emptyOrder } from "../reducers/OrderSlice";

import {
  CreateOrderApi,
  getOrderByUserID,
  getOrderDiscountByPromoCode,
} from "../Api/order";
import { setDiscount, removeDiscount, setPromoMsg } from "../reducers/FoodSlice";

export const setDiscountbyPromoCode = (promoCode, userID) => {
  return async (dispatch, getState) => {
    const { data } = await getOrderDiscountByPromoCode(promoCode, userID);
    console.log(data, "distrpppp");
    if (data.massage) {
      dispatch(setPromoMsg(data.massage));
    }
    if (data.discount) {
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
