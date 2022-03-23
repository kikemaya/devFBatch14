'use strict'

class Node {
  constructor (data, next) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertar(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }

  eliminar() {
    if (this.head) {
      if (this.head.next) {
        const nodos = this.head.next;
        this.head = nodos;
      } else {
        this.head = null;
      }
    }
    //console.log(this.head);
  }

  recorrer() {
    let listaEnlazada = this.head;

    while (listaEnlazada) {
      console.log(listaEnlazada);
      listaEnlazada = listaEnlazada.next;
    }
  }

      
  buscar (valor) {
    if (!this.head) {
      return null;
    }

    let listaEnlazada = this.head;
    let contador = 0;

    while (listaEnlazada) {
      contador++;

      if (listaEnlazada.value == valor) {
        return `El valor ${listaEnlazada.value} si fue encontrado en la vuelta ${contador}`;
      }
      
      listaEnlazada = listaEnlazada.next;
    }

    return `El valor ${valor} no fue encontrado`
  }
}

const linkedList = new LinkedList();
linkedList.insertar('3');
linkedList.insertar('12');
linkedList.insertar('10');
//linkedList.recorrer();
console.log(linkedList.buscar('12'));
console.log(linkedList.buscar('11'));
console.log('********************');
linkedList.eliminar();
linkedList.eliminar();
linkedList.eliminar();
console.log(linkedList.buscar('11'));