import { getAllFood } from "../api/food";
import { getFoods } from "../reducers/FoodSlice";


export const getAndSetFoodAction = () => async (dispatch) => {
    try {
        const { data } = await getAllFood();
        dispatch(getFoods(data));
    } catch (error) {
        console.error(error.message);
    }
};
