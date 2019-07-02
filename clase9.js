var x = 4, y = '4'
//al comparar x == y el resultado es TRUE
//al comparar x === y el resultado es FALSE porque no tienen el mismo tipo de dato


var mao = {
    nombre: 'Mao'
}
var otraPersona = {
    nombre: 'Mao'
}
//Al comparar mao == otraPersona el resultado es FALSE
//Al comparar mao === otraPersona el resultado es FALSE

var otraPersona = mao
//Al comparar mao == otraPersona el resultado es TRUE
//Al comparar mao === otraPersona el resultado es TRUE

var otraPersona = {
    ...mao
}
//Al comparar mao == otraPersona el resultado es FALSE
//Al comparar mao === otraPersona el resultado es FALSE









