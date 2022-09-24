const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
const port = 5000

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})