class Renderer {
    constructor(){}

    renderData(allCityData){
        const source   = $("#first-template").html()
        const template = Handlebars.compile(source)
        console.log({allCityData})
        const newHTML = template({allCityData})
        $("#container").empty()
        $('#container').append(newHTML)
    }
}