//Arreglos - Array

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
    altura: 1.74
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

var personas = [mao, andres, jose, ana, leo, pao]
// console.log(`Mi nombre es ${personas[0].nombre} ${personas[1].apellido} y mido ${personas[3].altura}`)

for (i = 0; i < personas.length; i++) {
    var p = personas[i]
    console.log(`${i + 1}: ${p.nombre} mide ${p.altura}mts`)
}








