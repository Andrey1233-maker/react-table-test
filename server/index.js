const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express()
const port = 5000

app.use(cors())
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/node', require('./routes/entity.route'))

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})