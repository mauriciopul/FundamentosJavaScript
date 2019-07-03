//Clases

class Persona {
    constructor(nom, apell, altu) {
        this.nombre = nom
        this.apellido = apell
        this.altura = altu
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        if (this.altura >= 1.8) console.log(`Soy alto porque mido ${this.altura}`)
    }
}
//Herencia
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
    }
}


