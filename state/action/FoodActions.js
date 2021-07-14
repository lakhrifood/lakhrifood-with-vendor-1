import { getAllFood, getByCategoryFood, getByIDFood, getByRatingFood } from "../api/food";
import { getFoodByID, getFoodByRating, getFoods, getFoodsByCategory } from "../reducers/FoodSlice";

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

export const getAndSetFoodActionByID = (id) => async (dispatch) => {
    try {
        const { data } = await getByIDFood(id);
        dispatch(getFoodByID(data));
    } catch (error) {
        console.error(error.message);
    }
}