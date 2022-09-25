const db = require('../db')
const { countNodesOnPage } = require('../consts')
const { typesEnum, fieldEnum } = require('../const')


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
        const nodes = await getNodeWithoutFilter(page)
        return nodes
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
    const count = await db.query(`SELECT count() FROM nodes
        OFFSET ${(page - 1) * countNodesOnPage}
        LIMIT ${countNodesOnPage}
    ;`)
    return {nodes: nodes.rows, pageCount: count}
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}    
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}
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
        const count = await db.query(`SELECT count() FROM nodes
            OFFSET ${(page - 1) * countNodesOnPage}
            LIMIT ${countNodesOnPage}
        ;`)
        return {nodes: nodes.rows, pageCount: count}
    }
    catch(e) {
        throw e
    }
}

//

module.exports = {  createNodesTable,
                    getNodeWithoutFilter, 
                    getNodesWithFilterLessCount, 
                    getNodesWithFilterEqualCount, 
                    getNodesWithFilterBiggerCount,
                    getNodesWithFilterLessLeight,
                    getNodesWithFilterEqualLeight,
                    getNodesWithFilterBiggerLeight,
                    getNodes 
                }