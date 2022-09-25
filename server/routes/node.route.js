const { Router } = require('express')
const { countNodesOnPage } = require('../consts')
const { getNodes } = require('../servises/node.service')

const router = Router()

// возвращает объекты для таблицы
router.get('/', async (req, res) => {
    try {
        const { page, type, field, value } = req.query
        const nodes = await getNodes(page, type, field, value)
        res.status(200).json({ ...nodes, currentPage: page, type, field, value })
    }
    catch(e) {
        console.error(e)
        res.status(500).json({message: e})
    }
})

module.exports = router