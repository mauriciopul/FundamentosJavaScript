
//Se crea el objeto ´mao´con todos sus atributos
var mao = {
    nombre: 'Mauricio',
    apellido: 'Pulgarin',
    edad: 34,
    sexo: 'Masculino'
}

function imprNomMayus(n) {
    console.log(n.toUpperCase())
}
imprNomMayus(mao.nombre)
console.log(`${mao.nombre} ${mao.apellido} tiene ${mao.edad} años`)

//Otra forma mas precisa de mostrar solo el nombre es crear una función que capture todo el objeto 'mao'
function imprNombreMayus(persona) {
    console.log(persona.nombre.toUpperCase())
}
imprNombreMayus(mao)

//Otra forma es crear una función que capture solo el atributo
function imprNombreMayus({nombre}) {//Poner el atributo encerrado en llaves '{}'
    console.log(nombre.toUpperCase())
}
imprNombreMayus(mao)

imprNombreMayus({nombre: 'Pepito'})//Si no queremos el atributo de una variable lo podemos asignar