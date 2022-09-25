import { REQUEST_NODES_FROM_SERVER_ACTION, SET_NODES_TO_REDUX_ACTION } from "./actionTypes"


export const setNodesToReduxActionCreator = (nodes) => {
    return {
        type: SET_NODES_TO_REDUX_ACTION,
        nodes,
    }
}

export const requestNodesFromServerActionCreator = () => {
    return {
        type: REQUEST_NODES_FROM_SERVER_ACTION,
    }
}