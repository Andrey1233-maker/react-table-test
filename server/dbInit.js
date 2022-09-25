const { createNodesTable } = require("./servises/node.service")

const dbInit = () => {
    createNodesTable()
}

module.exports = { dbInit }