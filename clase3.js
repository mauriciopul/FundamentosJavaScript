var edad = 35
edad += 1 //Incrementar edad en 1
console.log(edad)

var peso = 75;
peso -= 2//Decrementa peso en 2
console.log(peso)

var precioDeVino = 200.3
console.log(precioDeVino)

//var totalPrecio = precioDeVino * 3//Esta suma de decimales no es precisa
//Para hacerla un poco mas precisa se hace la siguiente operacion
totalPrecio = Math.round(precioDeVino * 100 * 3)/100//De esta manera aunque seanmas decimales solo muestra 1 preciso
console.log(totalPrecio)

var totalPrecioString = totalPrecio.toFixed(2)//Para mostrar 2 decimales, o la cantidad deseada
console.log(totalPrecioString)

var total2 = parseFloat(totalPrecioString)//Para convertir de string a float
console.log(total2)

var pizza = 8
var personas = 2
var cantidadPorcionPersona = pizza / personas
console.log(cantidadPorcionPersona)

