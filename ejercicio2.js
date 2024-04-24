//Ingresar tres valores e indicar cual es el mayor y cual el menor

let num1=13
let num2=32
let num3=17
mayor=0
menor=999

if (num1>num2 && num1>num3){
mayor=num1
}

if (num2>num1 && num2>num3){
mayor=num2
}

if (num3>num1 && num3>num2){
mayor=num3
}

if (num1<num2 && num1<num2){
menor=num1
}

if (num2<num1 && num2<num3){
menor=num2
}

if (num3<num1 && num3<num2){
menor=num3
}

console.log(`el numero mayor es ${mayor}`)
console.log(`el numero menor es ${menor}`)