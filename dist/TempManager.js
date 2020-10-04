class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let citiesData = await $.get(`/cities`)

        if (citiesData) {
            this.cityData = citiesData
        }

        return (this.cityData)
    }

    async getCityDataFromExtAPI(cityName) {
        let city = await $.get(`/city/${cityName}`)
        this.cityData.push(city)
        console.log(this.cityData)
    }

    async saveCity(cityName) {
        this.cityData.forEach(city => {
            if (city.name === cityName) {
                console.log(city)
                $.post('/city', city)
            }
        })
    }

    async removeCity(cityName) {
        let cityIndex = 0
        for(let city of this.cityData){
            if(city.name != cityName){
                //const cityIndex = this.cityData.indexOf(city.name)
                cityIndex++
            }
        }
        console.log(cityIndex)
        this.cityData.splice(cityIndex, 1)
        await $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function (res) {
                res.send(`the city was deleted`)
            }
        })
    }
}