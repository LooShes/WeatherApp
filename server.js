const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const urllib = require('urllib')

const app = express()

app.use(express.static(path.join(__dirname, '/node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'model')))

app.use(bodyParser.json())

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

app.get(`/city/:cityName`, function(request, response){
    urllib.request(`api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=ec035401d1d40d6f5bb07d9588812996`, function(err, data){
        
        let cityName = request.params.cityName

        let result = JSON.parse(data.toString())
        response.send(result)
})
})
