import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    DELETE_ITEM,
    MODAL_ADD_ITEM,
    ADD_ITEM_FROM_INPUT,
    CLOSE_MODAL_WINDOW,
    INPUT_ERROR,
    CLEAR_ERROR,

} from "./consts";

const initialState = {
    data: {
        data: [],
        // length: null,
        // success: false,
        // error: "",
    },
    isModalOpen: false,
    inputError: false,
};

export const gettingDataReducer = (state = initialState, action) => {

    // console.log("reducer last id: ", state.data.data[state.data.data.length - 1].id);


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
                data: {data: state.data.data.filter((item) => item.id !== action.payload)}, // vlogennost !!!
            };
        case MODAL_ADD_ITEM:
            return {
                ...state,
                isModalOpen: true,
            };

        case ADD_ITEM_FROM_INPUT:

            const lastItem = state.data.data[state.data.data.length - 1];
            const nextId = lastItem ? (lastItem.id + 1) : 1;

            return {
                ...state,
                item: action.payload,
                data: {
                    data: state.data.data.concat({
                        id: nextId,
                        //state.data.data[state.data.data.length - 1].id + 1,
                        //Date.now()
                        title: action.payload,
                    })
                },
                // поменять айди на следующий по порядку / на 1 если массив пуст
            };

        case CLOSE_MODAL_WINDOW:
            return {
                ...state,
                isModalOpen: false,
            };
        case INPUT_ERROR:
            return {
                ...state,
                inputError: true,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                inputError: false,
            };
        default:
            return state;
    }
};


