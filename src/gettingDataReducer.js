import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
} from "./consts";

const initialState = {
    data: {},
};

export const gettingDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,

            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};