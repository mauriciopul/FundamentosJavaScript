//Filtrado de array (funcion 'filter')

var mao = {
    nombre: 'Mauricio',
    apellido: 'Araque',
    altura: 1.75
}
var andres = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    altura: 1.82
}
var jose = {
    nombre: 'Jose',
    apellido: 'Martinez',
    altura: 1.64
}
var ana = {
    nombre: 'Ana',
    apellido: 'Perez',
    altura: 1.84
}
var leo = {
    nombre: 'Leo',
    apellido: 'Gomez',
    altura: 1.35
}
var pao = {
    nombre: 'Paola',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = persona => persona.altura >= 1.8//Funcion que valida la altura mayor o igual a 1.8 mts
const esBaja = persona => persona.altura < 1.8//Funcion que valida la altura neor a 1.8 mts

var personas = [mao, andres, jose, ana, leo, pao]

//Este filter itera todo el array buscando quienes cumplan la funcion 'esAlta' y lo guarda en un array ´personasAltas
var personasAltas = personas.filter(esAlta)

//Este filter itera todo el array buscando quienes cumplan la funcion 'esBaja' y lo guarda en un array ´personasBajas
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)




