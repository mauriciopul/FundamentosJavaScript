//Prototipos

function Persona(nom, apell, altu) {
    this.nombre = nom
    this.apellido = apell
    this.altura = altu
}

Persona.prototype.soyAlto = function (persona) {
    if (this.altura >= 1.8) {
        console.log(`Soy alto porque mido ${this.altura}`)
    }else{
        console.log(`Lo siento pero soy un GNOMO y no te diré mi altura`)
    }
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    this.soyAlto()
}

var mao = new Persona('Mauricio', 'Pulgarin', 1.81)
var luisa = new Persona('Luisa', 'Giraldo', 1.75)
var gloria = new Persona('Gloria', 'Araque', 1.87)






