//Obtener la suma de los elementos de un array
let numeros = [2, 3, 4, 5]

let suma = numeros.reduce(
    (acumulador, valor) => acumulador + valor, 0,
  
)

console.log(`la suma es `+ suma)