let manager = new TempManager()
let renderer = new Renderer()

const loadPage = async () => {
    let citiesDataFromDB = manager.getDataFromDB()
    await renderer.renderData(citiesDataFromDB)
}

const handleSearch = async () => {
    let userInput = $(`#city-input`).val()
    let city = await manager.getCityDataFromExtAPI(userInput)
    renderer.renderSingleCity(city)
}

const onClickSearch = async () => {
    await $(`#search-btn`).on("click", function () {
        this.handleSearch()
    })
}

const onClickSave = async () => {
    await $(`#save-btn`).on("click", function () {
        let saveCity = this.closest(`#name`).text()
        manager.saveCity(saveCity)
    })
}

const onClickRemove = async () => {
    await $(`#remove-btn`).on("click", function () {
        let removeCity = this.closest(`#name`).text()
        manager.removeCity(removeCity)
    })
}

loadPage()