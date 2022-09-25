// default server path
export const SERVER_PATH = 'http://localhost:5000'
// node path
export const NODES_PATH = `${SERVER_PATH}/node`

// query builder for node path
export const nodePathQueryCreator = (page, filterField, filterType, value) => {
    return `${NODES_PATH}?page=${page}&fileld=${filterField}&type=${filterType}&value=${value}`
}