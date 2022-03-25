//ALGORITMO HECTOR :D      
const multiplicacion = (a, b) => {
    if (b === 0) return 0
    if (b === 1) return a
    return a + multiplicacion (5, b - 1)
}

//UNA CONDICION DE SALIDA
console.log(multiplicacion(2, 90))