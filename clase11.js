var mao = {
    nombre: 'Mauricio',
    apellido: 'Pulgarin',
    edad: 35,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}
var juli = {
    nombre: 'Juliana',
    apellido: 'Pulgarin Gomez',
    edad: 14
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es Mayor de edad`)
    } else {
        console.log(`${persona.nombre} es Menor de edad`)
    }
}







