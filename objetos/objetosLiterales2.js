'use strict'


const pamela = {
    // estruturas de clave(identificador) valor, key - value
    "primer nombre" : "Pamela",
    "apellido" : "Ortega",
    "intereses" : [
        'Nataciòn',
        'Green Day',
        'Harry Potter'       
    ],
    "x1" : "uno",
    "x2" : "dos"
}

const nombre = "primer nombre"

console.log(pamela[nombre]);

//NOTACION DE PUNTO
console.log(pamela.apellido);

//NOTACION DE CORCHETES/BRACKETS
console.log(pamela["primer nombre"]);
console.log(pamela["x" + n]);