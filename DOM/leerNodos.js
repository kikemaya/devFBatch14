'use strict'

// const titulo = document.getElementById('titulo')
// const parrafo = document.getElementsByClassName('parrafo')
const h2 = document.getElementsByTagName('h2')
// HTMLCOLLECTION {}

const query = document.querySelectorAll('.parrafo')
// NodeList []

//Eventos
const titulo = document.getElementById('titulo')

titulo.addEventListener('mouseover', () => {
    titulo.classList.add('texto-azul')
})

titulo.addEventListener('mouseout', () => {
    titulo.classList.remove('texto-azul')
})