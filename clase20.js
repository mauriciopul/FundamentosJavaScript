//reduce - funcion para reducir un arreglo a un elemento

var mao = {
    nombre: 'Mauricio',
    apellido: 'Araque',
    altura: 1.75,
    cantidadLibros: 132
}
var andres = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    altura: 1.82,
    cantidadLibros: 90
}
var jose = {
    nombre: 'Jose',
    apellido: 'Martinez',
    altura: 1.64,
    cantidadLibros: 65
}
var ana = {
    nombre: 'Ana',
    apellido: 'Perez',
    altura: 1.84,
    cantidadLibros: 83
}
var leo = {
    nombre: 'Leo',
    apellido: 'Gomez',
    altura: 1.35,
    cantidadLibros: 182
}
var pao = {
    nombre: 'Paola',
    apellido: 'Barros',
    altura: 1.76,
    cantidadLibros: 215
}

var personas = [mao, andres, jose, ana, leo, pao]

const reducir = (acum, { cantidadLibros }) => acum + cantidadLibros

var totalLibros = personas.reduce(reducir, 0)
console.log(`En total todos tienen ${totalLibros} libros`)

