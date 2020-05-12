
import { GET_USER, IS_LOADING, ERROR_USER } from "../types/userTypes";

export const getUser = () => dispatch => {
    dispatch({
        type: IS_LOADING
    });

    try {
        // logica

        return dispatch({
            type: GET_USER

        })
    } catch (error) {
        return dispatch({
            type: ERROR_USER,
            payload: error
        })
    }

}

