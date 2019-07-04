//Funciones como parámetros

class Persona {
    constructor(nom, apell, altu) {
        this.nombre = nom
        this.apellido = apell
        this.altura = altu
    }

    saludar(fn) {
        // var n = this.nombre
        // var a = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        if (this.altura >= 1.8) console.log(`Soy alto porque mido ${this.altura}`)
    }
}

class Desarrollador extends Persona {   //Herencia
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        // var n = this.nombre
        // var a = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`No sabia que eras Desarrollador/a`)
    }
}

var mao = new Persona('Mauricio', 'Pulgarin', 1.81)
var luisa = new Persona('Luisa', 'Giraldo', 1.75)
var gloria = new Desarrollador('Gloria', 'Araque', 1.87)

mao.saludar()
luisa.saludar(responderSaludo)
gloria.saludar(responderSaludo)



