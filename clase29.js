//callback y request

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opciones = { crossDpomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opciones, onPeopleResponse)
}


for(i=1; i<=5; i++){
    obtenerPersonaje(i)
}