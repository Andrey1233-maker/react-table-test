import { fieldEnum, typesEnum } from "../../const";
import { SET_ERROR_ACTION, SET_NODES_TO_REDUX_ACTION, UNSET_ERROR_ACTION } from "../action/actionTypes";

const init = {
    nodes: [],
    pageCurrent: 2,
    pageCount: 5,
    type: typesEnum.NONE,
    field: fieldEnum.NONE,
    value: '',
    error: null
}

export function table(state = init, action) {
    switch(action.type) {
        case SET_NODES_TO_REDUX_ACTION:
            return {...state, 
                    nodes: action.nodes.nodes,
                    pageCount: action.nodes.countPage, 
                    pageCurrent: action.nodes.currentPage,
                    type: action.nodes.type,
                    field: action.nodes.field,
                    value: action.nodes.value }
        case SET_ERROR_ACTION:
            return {...state,
                    error: action.error }
        case UNSET_ERROR_ACTION:
            return {...state,
                    error: null }
        default: 
            return state
    }
}