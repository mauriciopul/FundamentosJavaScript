//Manejando el orden y el asincronismo

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opciones = { crossDpomain: true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    const error = () => console.log(`Ocurrión un error, no se pudo oobtener el personaje ${id}`)


    $.get(url, opciones, callback).fail(error)
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)
            })
        })
    })
})