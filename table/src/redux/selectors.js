
export const tableSelector = state => state.table

export const nodesFromTableSelector = state => tableSelector(state).nodes

export const paginationFromTableSelector = state => ({pageCount: tableSelector(state).pageCount, pageCurrent: tableSelector(state).pageCurrent})