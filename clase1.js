var nombre = 'Mauricio', apellido = 'Pulgarin' //Se declaran variables con la palabra 'var'
nombreCompleto = nombre + ' ' + apellido//Tambien se declaran variables sin la palabra 'var'NO ES RECOMENDABLE
console.log(nombreCompleto)

var nombreEnMayusculas = nombre.toUpperCase();//Se convierten todos los string en Mayúscula
var apellidoEnMinusculas = apellido.toLowerCase();//Se convierten todos los string en Minúscula

console.log('Mi nombre es ' + nombreEnMayusculas)
console.log('Mi apellido es ' + apellidoEnMinusculas)

var caracter = nombre.charAt(0);//Se asigna a la variable 'caracter' el caracter en la posición 0
console.log(caracter)

var cantLetrasDelNombre = nombre.length; //Cantidad de caracteres de un string
console.log(cantLetrasDelNombre)

//Concatenar con 'interpolacion de texto'
nombreCompleto = `${nombre} ${apellido.toUpperCase()}   1`
console.log(nombreCompleto)

var prueba = `Esta es una prueba`
console.log(prueba)

//Opciones para escribir parte de un caracter
var str1 = nombre.charAt(1)+nombre.charAt(2)
console.log(str1)
var str2 = nombre.substr (1,2)//el primer parametro indica donde inicia, el segundo dice cuantos caracteres muestra
console.log(str2)



