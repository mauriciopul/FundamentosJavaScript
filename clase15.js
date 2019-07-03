//Do While

var cont = 0

const llueve = () => Math.random() < 0.25

do {

    cont++
}
while (!llueve())

var mostrar = ""
if (cont > 1) {
    mostrar = "veces"
} else {
    mostrar = "vez"
}
console.log(`Fui a ver si llovía ${cont} ${mostrar}`)



