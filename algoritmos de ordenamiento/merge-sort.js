'use strict'

// Axioma: Un conjunto de elementos, se dice que esta ordenado
// cuando el elemento es nulo, o cuando es la unidad.

// Divide...
// 1.- Dividir mi lista en mitades, hasta alcanzar la unidad

// ... y venceras
// 2.- reagrupando de forma ordenada mis mitades, hasta juntarlas 
// de forma ordenada.

// Recursivo,
// funcion que se retorna a si misma, condicion de salida/escape

const numeros = [3, 1, 2, 4]

//Funcion que recorta hasta la unidad
const mergeSort = (unsortedArray) => {
    
    const size = unsortedArray.length
    
    //condicion de salida y validacion
    if (size <= 1) return unsortedArray

    const middle = Math.ceil(size / 2)

    const left = unsortedArray.slice(0, middle)
    const right = unsortedArray.slice(middle, size)
                
    // const sortedLeft = mergeSort(left)
    // const sortedRight = mergeSort(right)

    //orden y mezcla
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {

    let resultArray = [], leftIndex = 0, rightIndex = 0
    
    console.log(left);
    console.log(right);
    
    //contador para avanzar y comparar
    while (leftIndex < left.length && rightIndex < right.length) {
        //relleno parte izqu. ordenada y avanzo
        if(left[leftIndex] < right[rightIndex]) {  
            resultArray.push(left[leftIndex])
            leftIndex++
        } else {
        //relleno parte der. ordenada y avanzo
            resultArray.push(right[rightIndex])
            rightIndex++
        }
    }
    
    const finalArray = resultArray
                            .concat(left.slice(leftIndex))
                            .concat(right.slice(rightIndex))
    
    // retorno el arreglo ordenado
    return finalArray
}

console.log(mergeSort(numeros))