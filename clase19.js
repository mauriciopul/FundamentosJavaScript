//Modificar array con la funcion 'map'

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

const esAlta = persona => persona.altura >= 1.8
const esBaja = persona => persona.altura < 1.8

const modifiAltura = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personas = [mao, andres, jose, ana, leo, pao]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(modifiAltura)

console.log(personasCms)
console.log(personas)






