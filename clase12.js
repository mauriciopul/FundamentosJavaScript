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
//Se puede asignar una funcion a una variable o constante, estae s una funcion anónima
// const esMayorDeEdad1 = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }
//Se puede asignar una funcion a una variable o constante, estae s una funcion anónima
//Esta funcion es igual a 'esMayorDeEdad1'
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es Mayor de edad`)
    } else {
        console.log(`${persona.nombre} es Menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (esMayorDeEdad(persona)) {
        console.log('ACCESO CONCEDIDO')
    } else {
        console.log('ACCESO DENEGADO')
    }
}






