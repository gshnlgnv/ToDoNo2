import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    DATA_URL,
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

export const getURL = () => {
    return dispatch => {
        dispatch(fetchDataPending());
        fetch(DATA_URL)
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                return response.json()
            })
            .then(data => {
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
};

function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING,
    }
}

function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    }
}

function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: error,
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id,
    }
};

export const modalOpenWindow = () => {
    return {
        type: MODAL_ADD_ITEM
    }
};

export const addItemFromInput = (item) => {
    return {
        type: ADD_ITEM_FROM_INPUT,
        payload: item,
    }
};

export const closeModalWindow = () => {
    return {
        type: CLOSE_MODAL_WINDOW,
    }
};

export const inputError = () => {
    return {
        type: INPUT_ERROR,
    }
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    }
};

export const editTitle = (editingID, newTitle) => {
    return {
        type: EDIT_TITLE,
        editingID: editingID,
        newTitle: newTitle,
    }
};

export const setEditWindowActive = () => {
    return {
        type: SET_EDITWINDOW_ACTIVE,
    }
};

export const closeEditWindow = () => {
    return {
        type: CLOSE_EDIT_WINDOW,
    }
};

export const btnBackFalse = () => {
    return {
        type: BUTTON_SWITCH,
    }
};

export const btnSaveTrue = () => {
    return {
        type: BUTTON_SWITCH_SAVE
    }
};