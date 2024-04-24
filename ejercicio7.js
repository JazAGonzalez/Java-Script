//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos
let num1 = 45
let num2 = 2

console.log (`los multimplos de 3 entre ${num1} y ${num2} son:`)

while (num1 < (num2)){
    if (num1 % 3 === 0){
        console.log (num1)
    }
        num1 = num1 + 1
}
while (num1 >= (num2)){
    if (num1 % 3 === 0){
        console.log (num1)
    }
        num1 = num1 - 1
}