import {
  getAllFood,
  getByCategoryFood,
  getByIDFood,
  getByPriceFilter,
  getByRatingFood,
  getBySearch,
  getByVendorIDFood,
  getFoodByDiscount,
  getPopularProduct,
  getRecommendedProduct,
} from "../Api/food";
import { getOrderByID } from "../Api/order";
import {
  getFoodByID,
  getFoodByRating,
  getFoods,
  getFoodsByCategory,
  getFoodsByPriceFilter,
  getFoodsBySearch,
  getPopularFoods,
  setRecommendedFoods,
  getOrderFoodById,
  getFoodsByDiscount,
} from "../reducers/FoodSlice";

export const getAndSetFoodAction = () => async (dispatch) => {
  try {
    const { data } = await getAllFood();
    dispatch(getFoods(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const getOrderbyidAction = (id) => async (dispatch) => {
  try {
    const { data } = await getOrderByID(id);
    dispatch(getOrderFoodById(data));
    console.log(data, "order by id calling");
  } catch (error) {
    console.error(error.message);
  }
};
export const getAndSetByCategoryFoodAction = (category) => async (dispatch) => {
  try {
    const { data } = await getByCategoryFood(category);
    dispatch(getFoodsByCategory(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const getAndSetByDiscountFoodAction = (category) => async (dispatch) => {
  try {
    const { data } = await getFoodByDiscount(category);
    dispatch(getFoodsByDiscount(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const getAndSetFoodActionByRating = (rating) => async (dispatch) => {
  try {
    const { data } = await getByRatingFood(rating);
    dispatch(getFoodByRating(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const getAndSetFoodActionByID = (id) => async (dispatch) => {
  try {
    const { data } = await getByIDFood(id);
    dispatch(getFoodByID(data));
  } catch (error) {
    console.error(error.message);
  }
};

// get food by price filtering
export const getAndSetFoodActionByPrice =
  (priceFrom, priceTo) => async (dispatch) => {
    try {
      const { data } = await getByPriceFilter(priceFrom, priceTo);
      dispatch(getFoodsByPriceFilter(data));
    } catch (error) {
      console.error(error.message);
    }
  };

// get food by search
export const getAndSetFoodActionBySearch = (search) => async (dispatch) => {
  try {
    const { data } = await getBySearch(search);
    dispatch(getFoodsBySearch(data));
  } catch (error) {
    console.error(error.message);
  }
};

// get popular foods
export const getAndSetPopularFoodAction = () => async (dispatch) => {
  try {
    const { data } = await getPopularProduct();
    dispatch(getPopularFoods(data));
  } catch (error) {
    console.error(error.message);
  }
};

// get and set recommended food
export const getAndSetRecommendedFoodAction = () => async (dispatch) => {
  try {
    const { data } = await getRecommendedProduct();
    dispatch(setRecommendedFoods(data));
  } catch (error) {
    console.error(error.message);
  }
};

// get food by vendor id
export const getAndSetFoodActionByVendorID = (vendorID) => async (dispatch) => {
  try {
    const { data } = await getByVendorIDFood(vendorID);
    dispatch(getFoods(data));
  } catch (error) {
    console.error(error.message);
  }
};
