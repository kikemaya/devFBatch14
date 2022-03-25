'use strict'

// ordena a menor a mayor,
// comparaciones,
// Se dividían en dos grupos cuando estaban rodeados,
// hacer un recorrido completo,
// Se comparaban entre mayor y menor, el mayor seguia hasta encontrar uno mayor a el,
// al final revisaron si estaban en su lugar,
// al final quedan ordenados.

const arr = [0, 14, 67, 4, 2, 1]

const bubbleSort = numeros => {
    const total = numeros.length

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]]
            }
        }
    }

    return numeros
}

console.log(bubbleSort(arr));