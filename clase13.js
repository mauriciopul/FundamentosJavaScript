//Ciclo FOR
var mao = {
    nombre: 'Mauricio',
    apellido: 'Pulgarin',
    edad: 35,
    peso: 80
}

console.log(`Al inicio del año ${mao.nombre} pesa ${mao.peso.toFixed(1)}kg`)

const CAMBIO_PESO = 0.2
const DIAS_DEL_ANO = 365

const subirPeso = persona => persona.peso += CAMBIO_PESO
const bajarPeso = persona => persona.peso -= CAMBIO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {

    var random = Math.random()
    if (random < 0.25) {
        subirPeso(mao)
    } else if (random < 0.5) {
        bajarPeso(mao)
    }
}


console.log(`Al final del año ${mao.nombre} pesa ${mao.peso.toFixed(1)}kg`)





