

export const getAndSetRoomAction = (uid) => async (dispatch) => {
    try {
        const { data } = await getAllRoomsByAdminID(uid);
        dispatch(getRooms(data));
    } catch (error) {
        console.error(error.message);
    }
};
