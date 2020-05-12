import { SET_USER, REMOVE_USER, GET_USER, ERROR_USER, IS_LOADING } from "../../types/userTypes";

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload, error: null, isLoadingPoints: false };

        case REMOVE_USER:
            return { ...state, user: null, isLoadingPoints: false };

        case GET_USER:
            return { ...state, error: action.payload, isLoadingPoints: false };

        case ERROR_USER:
            return { ...state, error: action.payload, isLoadingPoints: false };

        case IS_LOADING:
            return { ...state, isLoadingPoints: true };

        default:
            return state;
    }
};