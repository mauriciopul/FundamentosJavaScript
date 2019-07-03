//Ciclo WHILE

var mao = {
    nombre: 'Mauricio',
    apellido: 'Pulgarin',
    edad: 35,
    peso: 80
}
console.log(`Al inicio del año ${mao.nombre} pesa ${mao.peso}kg`)

const CAMBIO_PESO = 0.3
const DIAS_DEL_ANO = 365

const subirPeso = persona => persona.peso += CAMBIO_PESO//Funcion para subir de peso 
const bajarPeso = persona => persona.peso -= CAMBIO_PESO//Funcion para bajar de peso
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const META = mao.peso - 3//constante que muestra 3 kilos que debe adelgazar
var dias = 0

while (mao.peso > META) {

    if (comeMucho()) subirPeso(mao)
    if (haceDeporte(mao)) bajarPeso(mao)
    dias++
}

console.log(`pasaron ${dias} dias hasta que ${mao.nombre} adelgazó 3kg`)




