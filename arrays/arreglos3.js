'use strict'

// Los arreglos inician a partir de 0
//----------------------0----1----2
// let arregloBasico = [1, 5, 2, 4, 3, 3, 5];
// arregloBasico.sort((a, b) => { return a - b});
// console.log(arregloBasico[arregloBasico.length]); // = arregloBasico[3]
// console.log(arregloBasico[arregloBasico.length - 1]); // = arregloBasico[2]
// let filtrado1 = arregloBasico.filter((arreglo) => arreglo === 9);
// let filtrado2 = arregloBasico.find((arreglo) => arreglo === 9);
// let filtrado = arregloBasico.map(arreglo => arreglo);

// ------------------------
let arreglo = [1, 2, 3, 4, 5];
let arreglo1 = arreglo.map(arr => arr);

arreglo[0] = 6;
arreglo1[1] = 7;

console.log(arreglo);
console.log(arreglo1);

// ------------------------
let arregloa = [
  {
    dato: 1,
    info: {
      nombre: 'Daniel',
      ciudades: []
    }
  }, { 
    dato: 2
  }, {
    dato:3
  }];

let arreglob = arregloa.map(arr => ({...arr}));

arregloa[0].dato = 6;
arreglob[1].dato = 7;
arregloa[0].info.nombre = 'Karla';

console.log('arregloa ', arregloa);
console.log('arreglob ', arreglob);

// ------------------------

let letra1 = 'a';
let letra2 = letra1;
letra1 = 'b';

console.log('letra1 ', letra1);
console.log('letra2 ', letra2);