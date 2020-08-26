import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    DATA_URL,
    DELETE_ITEM,
    MODAL_ADD_ITEM,
    ADD_ITEM_FROM_INPUT,
    CLOSE_MODAL_WINDOW,
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
