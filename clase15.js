//Do While

var cont = 0

const llueve = () => Math.random() < 0.25

do {

    cont++
}
while (!llueve())

console.log(`Fui a ver si llovía ${cont} veces`)



