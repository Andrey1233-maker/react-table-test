import { REQUEST_NODES_FROM_SERVER_ACTION, SET_ERROR_ACTION, SET_NODES_TO_REDUX_ACTION, UNSET_ERROR_ACTION } from "./actionTypes"


export const setNodesToReduxActionCreator = (nodes) => {
    return {
        type: SET_NODES_TO_REDUX_ACTION,
        nodes,
    }
}

export const requestNodesFromServerActionCreator = (page, field, type, value) => {
    return {
        type: REQUEST_NODES_FROM_SERVER_ACTION,
        page,
        field,
        typeFilter: type,
        value,
    }
}

export const setErrorActionCreator = (error) => {
    return {
        type: SET_ERROR_ACTION,
        error,
    }
}

export const unsetErrorActionCreator = () => {
    return {
        type: UNSET_ERROR_ACTION,
    }
}