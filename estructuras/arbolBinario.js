'use strict'

class Nodo {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  // return {value: value, left: left, right: right};
}

class ArbolBinario {
  constructor() {
    this.root = null;
  }

  insertar(value) {
    // Construir el nuevo nodo que se va a agregar al arbol
    // -------------> { value: valor, left: null, right: null }
    const nuevoNodo = new Nodo(value, null, null)

    // this.root -> soy nulo :( Entonces ! no seas nulo :) this.root a bueno ya no soy nuloooo
    if (!this.root) {
      this.root = nuevoNodo;
    } else {
      let nodoActual = this.root; //{value: 50, left: null, right: {value: 75, left: null, right: null}}
      let bandera = true;

      while (bandera) {
        if (value === nodoActual.value) {
          bandera = false;
        }

        if (value !== nodoActual.value) {
          if (value < nodoActual.value) {
            if (nodoActual.left) {
              nodoActual = nodoActual.left;
            } else {
              nodoActual.left = nuevoNodo;
              bandera = false;
            }
          }

          if (value > nodoActual.value) {
            if (nodoActual.right) {
              nodoActual = nodoActual.right;
            } else {
              nodoActual.right = nuevoNodo;
              bandera = false;
            }
          }
        }
      }
    }

    console.log(`El valor ${value} fue agregado exitosamente`);
  }

  print() {
    console.log(this.root);
  }

  find(value) {
    // Buscar en el arbol binario previamente construido el valor que llega como 
    // parametro y retornar si fue encontrado o no.
    console.log(`El valor ${value} fue encontrado`);
    console.log(`El valor ${value} no fue encontrado`);
  }
}

const arbolBinario = new ArbolBinario;

arbolBinario.insertar(50);
arbolBinario.insertar(75);
arbolBinario.insertar(25);
arbolBinario.insertar(85);
arbolBinario.insertar(23);
arbolBinario.insertar(95);
arbolBinario.find(44);
arbolBinario.find(20);
arbolBinario.find(95);