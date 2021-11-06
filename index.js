const express = require('express')
const app = express()
require('dotenv').config()
const port = 5000
const router = require('./productroutes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
