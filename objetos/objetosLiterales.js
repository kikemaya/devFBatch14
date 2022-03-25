'use strict'

// JSON(Javascript object notation)
const jaguar = {
    nombre: "Jaguar",
    color: "amarillo",
    funcionJaguar() {
        return "Gruñido Jaguar";
    }
}

function funcionElefante() {
    return "Gruñido elefante"
}

console.log(jaguar.funcionJaguar())
console.log(funcionElefante);
