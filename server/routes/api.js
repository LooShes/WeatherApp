const express = require('express')
const axios = require('axios')
const City = require('../model/City')

const router = express.Router()

router.get(`/city/:cityName`, async (req, res) => {
    let cityName = req.params.cityName
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ec035401d1d40d6f5bb07d9588812996`)

    let city = {
        name: response.data.name,
        temprature: response.data.main.temp,
        condition: response.data.weather[0].description,
        conditionPic: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed           
    }
    
    res.send(city)
})

router.get(`/cities`, async (req, res) => {
    let  cityData = await City.find({})
    res.send(cityData)
})

router.post('/city', async (req, res) => {
    let city = new City(req.body)
    let saveInDB = await city.save()
    console.log(city)
    res.send(saveInDB.name)
})

router.delete(`/city/:cityName`, async (req, res) => {
    const cityName = req.params.cityName
    let deletedFromDB = await City.findOneAndDelete({name: cityName})
    res.send(deletedFromDB.name)
})

module.exports = router