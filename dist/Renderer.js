class Renderer {
    constructor(){}

    renderData(allCityData){
        const source = $('#first-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({city: allCityData})
        $("#city").empty()
        $('#city').append(newHTML)
    }
}