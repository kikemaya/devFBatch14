'use strict'

let arregloDeObjetos = [
    {
        nombre: "Elba",
        edad: 23
    },
    {
        nombre: "Helon",
        edad: 17
    }
]

arregloDeObjetos[1].nombre = 'Melissa'

console.log(arregloDeObjetos[1].nombre);


function sum(x, y, z) {
    return x + y + z;
}
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6


function sumar(n1, n2) {
    return n1 + n2
}

//Funcion anonima, funcion de flecha
() => {

}

const sumarFlecha = () => {
    return n1 + n2
}

//Funcion de orden mayor
funtion funcionMayor(funcionCallback) {
    return funcionCallback()
}
