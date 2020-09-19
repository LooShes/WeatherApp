const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')

const app = express()

app.use(express.static(path.join(__dirname, '/node_modules')))
app.use(express.static(path.join(__dirname, '/dist')))
app.use(bodyParser.json())

app.use('/', api)

mongoose.connect('mongodb://localhost/weather', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log(`DB Connected!`))

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
