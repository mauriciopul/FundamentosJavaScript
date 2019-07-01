//Se crea el objeto ´mao´con todos sus atributos
var mao = {
    nombre: 'Mauricio',
    apellido: 'Pulgarin',
    edad: 35,
    sexo: 'Masculino'
}
var dario = {
    nombre: 'Dario',
    apellido: 'Monsalve',
    edad: 27,
    sexo: 'Masculino'
}

function imprNombreMayus(persona) {
    // var nombre = persona.nombre   //La linea de abajo es lo mismo que esta linea
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
imprNombreMayus(mao)
// imprNombreMayus({ nombre: 'Pepito' })//Si no queremos el atributo de una variable lo podemos asignar


function ImprNomYEdad(persona) {
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
ImprNomYEdad(mao)
ImprNomYEdad(dario)

