const express = require('express')
const app = express()
const cors = require('cors')
const { errors } =  require('celebrate')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())


app.listen(3333)

