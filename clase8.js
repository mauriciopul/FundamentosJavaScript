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

function cumpleanos(persona) {
    persona.edad += 1
}
cumpleanos(mao)

//Otra forma de hacer es asignando todo el objeto
function cumpleanos(persona) {
    return {
        ...persona,//De esta manera se copian todos los atributos del objeto
        edad: persona.edad + 1//Así se modifica un atributo del objeto
    }
}
cumpleanos(mao)
