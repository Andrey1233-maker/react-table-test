const { Router } = require('express')
const { getNodes, createNode } = require('../servises/node.service')

const router = Router()

// return nodes by filter and page number
router.get('/', async (req, res) => {
    try {
        const { page, type, field, value } = req.query
        const nodes = await getNodes(page, type, field, value)
        console.log({ ...nodes, currentPage: page, type, field, value })
        res.status(200).json({ ...nodes, currentPage: page, type, field, value })
    }
    catch(e) {
        console.error(e)
        res.status(500).json({message: e})
    }
})

// create new node
router.post('/', async (req, res) => {
    try {
        const { title, count, leight, date} = req.body
        const newNode = await createNode(title, count, leight, date)
        res.status(200).json({newNode})
    }
    catch(e) {
        console.error(e)
        res.status(500).json({message: e})
    }
})

module.exports = router