'use strict'

const alumnos = [];

function guardar() {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let grupo = document.getElementById('grupo').value;

  alumnos.push({
    nombre: nombre,
    apellido: apellido,
    grupo: grupo,
  });

  document.getElementById('nombre').value = "";
  document.getElementById('apellido').value = "";
  document.getElementById('grupo').value = "";

  let tabla1 = document.getElementById('tabla1');
  tabla1.innerHTML = '';

  for (let index = 0; index < alumnos.length; index++) {
    let row = document.createElement('tr');
    let nombre = document.createElement('td');
    let apellido = document.createElement('td');
    let grupo = document.createElement('td');

    nombre.innerHTML = alumnos[index].nombre;
    apellido.innerHTML = alumnos[index].apellido;
    grupo.innerHTML = alumnos[index].grupo;
    
    row.appendChild(nombre);
    row.appendChild(apellido);
    row.appendChild(grupo);

    tabla1.appendChild(row)
  }

}

function mostrar() {
  let tabla2 = document.getElementById('tabla2');
  tabla2.innerHTML = '';

  for (let index = 0; index < alumnos.length; index++) {
    let row = document.createElement('tr');
    let nombre = document.createElement('td');
    let apellido = document.createElement('td');
    let grupo = document.createElement('td');

    nombre.innerHTML = alumnos[index].nombre;
    apellido.innerHTML = alumnos[index].apellido;
    grupo.innerHTML = alumnos[index].grupo;
    
    row.appendChild(nombre);
    row.appendChild(apellido);
    row.appendChild(grupo);

    tabla2.appendChild(row)
  }
}

function filtrar() {
  let alumnosFiltrar = alumnos.map(alumno => ({...alumno}));

  const  generateRandomString = (num) => {
    const characters ='abcd';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
      result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
  }

  alumnosFiltrar.forEach(alumnosF => {
    alumnosF.grupo = generateRandomString(1);
  });

  let tabla2 = document.getElementById('tabla2');
  tabla2.innerHTML = '';

  for (let index = 0; index < alumnosFiltrar.length; index++) {
    let row = document.createElement('tr');
    let nombre = document.createElement('td');
    let apellido = document.createElement('td');
    let grupo = document.createElement('td');

    nombre.innerHTML = alumnosFiltrar[index].nombre;
    apellido.innerHTML = alumnosFiltrar[index].apellido;
    grupo.innerHTML = alumnosFiltrar[index].grupo;
    
    row.appendChild(nombre);
    row.appendChild(apellido);
    row.appendChild(grupo);

    tabla2.appendChild(row)
  }
}