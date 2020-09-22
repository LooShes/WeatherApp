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

$(`#container`).on("click", `#save-btn`, async function () {
    let saveCity = $(this).closest(`#city`).find(`#name`).text()
    await manager.saveCity(saveCity)
    console.log(manager.cityData)
    renderer.renderData(manager.cityData)
})

$(`#container`).on("click", `#remove-btn`, async function () {
    let removeCity = $(this).closest(`#city`).find(`#name`).text()
    console.log(removeCity)
    await manager.removeCity(removeCity)
    renderer.renderData(manager.cityData)
})

loadPage()