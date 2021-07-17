import { getAllHomechefData, getHomechefByID, getPopularVendor } from "../api/homechef";
import { getHomeChefs, getHomeChefsByID, getPopularHomeChefs } from "../reducers/HomechefSlice";

export const getAndSetAllHomechefsAction = (pageNumber) => async (dispatch) => {
    console.log(dispatch)
    try {
        const { data } = await getAllHomechefData(pageNumber);
        dispatch(getHomeChefs(data));
    } catch (error) {
        console.error(error.message);
    }
};

export const getAndSetHomechefAction = (id) => async (dispatch) => {
    try {
        const { data } = await getHomechefByID(id);
        dispatch(getHomeChefsByID(data));
    } catch (error) {
        console.error(error.message);
    }
}

// get popular homechefs
export const getAndSetPopularHomechefsAction = () => async (dispatch) => {
    try {
        const { data } = await getPopularVendor();
        dispatch(getPopularHomeChefs(data));
    } catch (error) {
        console.error(error.message);
    }
}