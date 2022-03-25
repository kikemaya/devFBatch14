'use strict'

//azucar sintactica
class Animal {
    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
    }
    funcionAnimal() {
        return console.log("Sonido de animal");
    }
}

const perro = new Animal("Boxer", "Cafè")

console.log(perro.color);
perro.funcionAnimal()