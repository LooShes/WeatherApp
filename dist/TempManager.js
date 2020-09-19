
class TempManager {
    constructor(){
        this.cityData = []
    }

    async getDataFromDB(){
        let citiesData = await $.get(`/cities`)

        if(citiesData){
           this.cityData = citiesData
        }

        return(this.cityData)
    }

    async getCityDataFromExtAPI(cityName){
        let city = await $.get(`/city/:${cityName}`)
        this.cityData.push(city)

        return(this.cityData)
    }

    async saveCity(cityName){
        this.cityData.forEach(city => {
            if(city === cityName){
                $.post('/city', city)
            }            
        })
    }

    async removeCity(cityName){
        $.ajax({
            url: `/city/:${cityName}`,
            method: "DELETE",
            success: function (res) { 
                console.log(`the city was deleted`)
            }
        }) 
    }
}