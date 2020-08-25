import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    DELETE_ITEM,
} from "./consts";

const initialState = {
    data: {},
};

export const gettingDataReducer = (state = initialState, action) => {

    console.log("reducer id : ", action.payload);
    console.log("state.data.data: ", state.data.data);

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

        case DELETE_ITEM:
            return {
                ...state,
                id: action.payload,
                data: {data: state.data.data.filter( (item) => item.id !== action.payload)}  // vlogennost !!!
            };

        default:
            return state;
    }
};