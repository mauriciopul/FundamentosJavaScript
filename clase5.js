var nombre = 'Mauricio'//nombre: Variable Global del objeto window

function imprNomMayus (n){//n: variable local
    console.log(n.toUpperCase())//Imprime variable local convirtiendo la global en mayuscula
    console.log(window.nombre)//Imprime variable global
}
imprNomMayus(nombre)//Imprime funcion con el parámetro global