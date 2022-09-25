const { Router } = require('express')

const router = Router()

// возвращает объекты для таблицы
router.get('/', async (req, res) => {
    try {
        const page = req.query.page ?? 1
        res.status(200).json({nodes: [
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
            { title: 'qwer', length: 2, count: 3, date: '1.1.1' },
        ],
        currentPage: 1,
        countPage: 5})
    }
    catch(e) {
        res.status(500).json({message: e})
    }
})

module.exports = router