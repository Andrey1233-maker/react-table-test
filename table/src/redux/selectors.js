// table reducer
export const tableSelector = state => state.table
// nodes from table reducer
export const nodesFromTableSelector = state => tableSelector(state).nodes
// pagination data from reducer
export const paginationFromTableSelector = state => ({pageCount: tableSelector(state).pageCount, pageCurrent: tableSelector(state).pageCurrent})
// error from table
export const errorFromTableSelector = state => tableSelector(state).error