import { getAllFood, getByCategoryFood, getByRatingFood } from "../api/food";
import { getFoodByRating, getFoods, getFoodsByCategory } from "../reducers/FoodSlice";

export const getAndSetFoodAction = () => async (dispatch) => {
  try {
    const { data } = await getAllFood();
    dispatch(getFoods(data));
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
}

export const getAndSetFoodActionByRating = (rating) => async (dispatch) => {
    try {
        const { data } = await getByRatingFood(rating);
        dispatch(getFoodByRating(data));
    } catch (error) {
        console.error(error.message);
    }
}