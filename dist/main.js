let manager = new TempManager()
let renderer = new Renderer()

const loadPage = async () => {
    await manager.getDataFromDB()
    renderer.renderData(manager.cityData)
}

const handleSearch = async (userInput) => {
    console.log(userInput)
    await manager.getCityDataFromExtAPI(userInput)
    console.log(manager.cityData)
    renderer.renderData(manager.cityData)
}

$(`#search-btn`).on("click", async function () {
    let userInput = $(`#city-input`).val()
    await handleSearch(userInput)
})

$(`#save-btn`).on("click", async function () {
    let saveCity = this.closest(`#name`).text()
    await manager.saveCity(saveCity)
})

$(`#remove-btn`).on("click", async function () {
    let removeCity = this.closest(`#name`).text()
    await manager.removeCity(removeCity)
})

loadPage()