const db = require('../db')
const { typesEnum, fieldEnum, countNodesOnPage } = require('../const')

// selector for request to DB
const getNodes = async (page, type, field, value) => {
    try {
        if(typesEnum.LESS === Number(type) && fieldEnum.COUNT === Number(field)){
            const nodes = await getNodesWithFilterLessCount(value, page)
            return nodes
        }
        if(typesEnum.EQUAL === Number(type) && fieldEnum.COUNT === Number(field)){
            const nodes = await getNodesWithFilterEqualCount(value, page)
            return nodes
        }
        if(typesEnum.BIGGER === Number(type) && fieldEnum.COUNT === Number(field)){
            const nodes = await getNodesWithFilterBiggerCount(value, page)
            return nodes
        }
        if(typesEnum.LESS === Number(type) && fieldEnum.LEIGHT === Number(field)){
            const nodes = await getNodesWithFilterLessLeight(value, page)
            return nodes
        }
        if(typesEnum.EQUAL === Number(type) && fieldEnum.LEIGHT === Number(field)){
            const nodes = await getNodesWithFilterEqualLeight(value, page)
            return nodes
        }
        if(typesEnum.BIGGER === Number(type) && fieldEnum.LEIGHT === Number(field)){
            const nodes = await getNodesWithFilterBiggerLeight(value, page)
            return nodes
        }
        if(typesEnum.EQUAL === Number(type) && fieldEnum.TITLE === Number(field)) {
            const nodes = await getNodesWithFilterEqualTitle(value, page)
            return nodes
        }
        if((typesEnum.BIGGER === Number(type) || typesEnum.LESS === Number(type)) && fieldEnum.TITLE === Number(field)) {
            const nodes = await getNodesWithFilterBiggerTitle(value, page)
            return nodes
        }
        const nodes = await getNodeWithoutFilter(page)
        return nodes
    }
    catch(e) {
        throw e
    }
}

// node creator
const createNode = async (title, count, leight, date) => {
    try{
        const newNode = await (await db.query(`INSERT INTO nodes(title, count, leight, date) VALUES('${title}', ${count}, ${leight}, '${date}');`)).rows[0]
        return newNode
    }
    catch(e) {
        throw e
    }
}

// create table if it not exist
const createNodesTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS nodes (
            title varchar(20) NOT NULL,
            count int NOT NULL,
            leight real NOT NULL,
            date date NOT NULL 
        );`)
    }
    catch(e) {
        throw e
    }
}

// return nodes on page without filters
const getNodeWithoutFilter = async (page = 1) => {
    try {
    const nodes = await db.query(`SELECT * FROM nodes
        OFFSET ${(page - 1) * countNodesOnPage}
        LIMIT ${countNodesOnPage}
    ;`)
    const count = (await db.query(`SELECT * FROM nodes;`)).rows[0].count
    return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with less count than value on page
const getNodesWithFilterLessCount = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE count < ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes
            WHERE count < ${value};`)).rows[0].count
        return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with count as value on page
const getNodesWithFilterEqualCount = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE count = ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes
            WHERE count = ${value};`)).rows[0].count
    return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with bigger count than value on page
const getNodesWithFilterBiggerCount = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE count > ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes
            WHERE count > ${value};`)).rows[0].count
    return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with bigger leight than value on page
const getNodesWithFilterBiggerLeight = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE leight > ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes  
            WHERE leight > ${value};`)).rows[0].count
    return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with leight as value on page
const getNodesWithFilterEqualLeight = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE leight = ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes
            WHERE leight = ${value};`)).rows[0].count
    return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with less leight than value on page
const getNodesWithFilterLessLeight = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE leight < ${value}
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT * FROM nodes
            WHERE leight < ${value};`)).rows[0].count
        return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with title as value on page
const getNodesWithFilterEqualTitle = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE title = '${value}'
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT COUNT(*) FROM nodes
            WHERE title = '${value}';`)).rows[0].count
            console.log(count)
        return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

// return nodes with bigger title than value on page
const getNodesWithFilterBiggerTitle = async (value, page = 1) => {
    try {
        const nodes = await db.query(`SELECT * FROM nodes
            WHERE title LIKE '%${value}%'
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        const count = (await db.query(`SELECT COUNT(*) FROM nodes
            WHERE title LIKE '%${value}%';`)).rows[0].count
            console.log(count)
        return {nodes: nodes.rows, countPage: Math.floor(Number(count) / countNodesOnPage)}
    }
    catch(e) {
        throw e
    }
}

module.exports = {  createNodesTable,
                    getNodes,
                    createNode 
                }