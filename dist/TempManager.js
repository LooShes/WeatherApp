class TempManager {
    constructor(){
        this.cityData = []
    }

    getDataFromDB(){
        $.get(`/cities`, function(cities) {
            console.log(cities)
    })
    }

    async getCityData(){
        let city = await axios.get(`/city/London`)
        console.log(city)
    }

}

let manager = new TempManager()
manager.getDataFromDB()
manager.getCityData()