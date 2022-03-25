'use strict'

// recorrer los datos

// Se aseguran que los valores en la izquierda, sean los valores más chicos y los de la derecha los mayores,
//preguntar por la derecha, si soy mas chico que algun 
// numero en la izq. Si eso ocurre, me inserto en esa posicion

const insertionSort = (numeros) => {
    for (let i = 1; i < numeros.length; i++) {
                                                      
        let j = i
        while (j >= 1 && numeros[j] < numeros[j - 1]) {
            [numeros[j - 1], numeros[j]] = [numeros [j], numeros[j - 1]]
            j--
        }   

    }
    return numeros
}

console.log(insertionSort([3, 0, 1, 9, 8, 5, 7, 4, 2, 6, 6, 7, 121, 129, 576.675, 3.1415872, 0]));