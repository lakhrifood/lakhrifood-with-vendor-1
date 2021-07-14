import { addOrder } from "../reducers/OrderSlice";

export const AddOrderCartAction = (orderDetailes) => async (dispatch) => {
  try {
    dispatch(addOrder(orderDetailes));
  } catch (error) {
    console.error(error.message);
  }
};
