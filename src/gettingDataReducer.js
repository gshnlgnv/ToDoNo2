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
    EDIT_TITLE,
    SET_EDITWINDOW_ACTIVE,
    CLOSE_EDIT_WINDOW,
    BUTTON_SWITCH,
    BUTTON_SWITCH_SAVE,
} from "./consts";

const initialState = {
    data: {
        data: [],
    },
    isModalOpen: false,
    inputError: false,
    openEditWindow: false,
    buttonSwitcher: false,
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
                data: {data: state.data.data.filter((item) => item.id !== action.payload)},
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
                data: {
                    data: state.data.data.concat({
                        id: nextId,
                        //Date.now()
                        title: action.payload,
                    })
                },
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
        case EDIT_TITLE:
            return {
                ...state,
                data: {
                    data: state.data.data.map((item) => {
                        if (item.id === action.editingID) {
                            item.title = action.newTitle;
                        }
                        return item;
                    })
                },
            };
        case SET_EDITWINDOW_ACTIVE:
            return {
                ...state,
                openEditWindow: true,
            };
        case CLOSE_EDIT_WINDOW:
            return {
                ...state,
                openEditWindow: false,
            };
        case BUTTON_SWITCH:
            return {
                ...state,
                buttonSwitcher: false,
            };
        case BUTTON_SWITCH_SAVE:
            return {
                ...state,
                buttonSwitcher: true,
            };
        default:
            return state;
    }
};


