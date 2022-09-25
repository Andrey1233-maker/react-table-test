import { SET_NODES_TO_REDUX_ACTION } from "../action/actionTypes";

const init = {
    nodes: [],
    pageCurrent: 2,
    pageCount: 5
}

export function table(state = init, action) {
    switch(action.type) {
        case SET_NODES_TO_REDUX_ACTION:
            return {...state, 
                    nodes: action.nodes.nodes,
                    pageCount: action.nodes.countPage, 
                    pageCurrent: action.nodes.currentPage }
        default: 
            return state
    }
}