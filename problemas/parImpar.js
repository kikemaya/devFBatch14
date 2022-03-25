'use strict'

// let nombre = 'Laura'
// console.log(nombre);

// let num = prompt("ingresa los numeros que quieras que validemos si son PAR separados por una coma");

// array = num.split(",")

// document.write("Los numeros pares que hay son los siguentes:" + "<br>")

// for (validacion of array) {
//     if (Number(validacion) % 2 == 0) {
//         document.write(`${validacion}<br>`)
//     }
// }

let numero;
numero = prompt("Ingresa un numero natural");
if (numero % 2 === 0) {
    alert("Es par");
} else {
    alert("Es impar");
}
