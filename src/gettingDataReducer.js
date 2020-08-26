import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    DELETE_ITEM,
    MODAL_ADD_ITEM,
    ADD_ITEM_FROM_INPUT,
    CLOSE_MODAL_WINDOW,

} from "./consts";

const initialState = {
    data: {
        data: [],
        length: null,
        success: false,
        error: "",
    },
    isModalOpen: false,
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

        case DELETE_ITEM:
            return {
                ...state,
                id: action.payload,
                data: { data: state.data.data.filter( (item) => item.id !== action.payload) }, // vlogennost !!!
            };
        case MODAL_ADD_ITEM:
            return {
                ...state,
                isModalOpen: true,
            };

        case ADD_ITEM_FROM_INPUT:
            return {
                ...state,
                item: action.payload,
                data: { data: state.data.data.concat( {id: Date.now() , title: action.payload,} ) } ,
                // поменять айди на следующий по порядку / на 1 если массив пуст
            };

        case CLOSE_MODAL_WINDOW:
            return {
                ...state,
                isModalOpen: false,
            };
        default:
            return state;
    }
};


