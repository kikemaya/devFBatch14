'use strict'

//Va a tomar un conjunto de datos
//va a crear dos subconjuntos, el datos ordenados y el
// de datos desordenados
// para ordenar, va a recorrer uno por uno, y va a seleccionar
// el mas pequeño a comparacion del elemento con el
// que se esta comparando
// se hace el swap y se va construyendo el subconjunto ordenado
// se enfoca en los que estan desordenados
// repite el proceso hasta que no haya elementos por comparar
// y solo se quede con el subconjunto ordenado.

// complejidad = O(n^2), por cada for

const numeros = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9, 2.4]

const selectionSort = numeros => {
    const arr2 = numeros.slice()
    [3, 0, 1, 8, 7, 2, 5, 4, 6, 9, 2.4]
    const total = numeros.length
    11
    //Recorrer el arreglo completo
    for (let i = 0; i < total; i++) {        
        //Almaceno la posicion minima
        let indiceMinimo = i

        for (let j = i + 1; j < total; j++) {
            //aqui identifico la posicion del numero mas pequeño
            if (arr2[j] < arr2[indiceMinimo]) {
                indiceMinimo = j
            }
        }
        //Aquì hago el swap de los valores
        const temp = arr2[indiceMinimo]                       
        arr2[indiceMinimo] = arr2[i]
        arr2[i] = temp
    }
    return arr2
}

console.log(selectionSort(numeros));