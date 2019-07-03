//Herencia prototipal

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () { }
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo

}

function Persona(nom, apell, altu) {
    this.nombre = nom
    this.apellido = apell
    this.altura = altu
}

Persona.prototype.soyAlto = function (persona) {
    if (this.altura >= 1.8) console.log(`Soy alto porque mido ${this.altura}`)
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}





// var mao = new Persona('Mauricio', 'Pulgarin', 1.81)
// var luisa = new Persona('Luisa', 'Giraldo', 1.75)
// var gloria = new Persona('Gloria', 'Araque', 1.87)
















