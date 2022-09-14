//Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let num = Number(prompt("Digite um número e descubra sua tabuáda"))
const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// for (let i in array){
//     i++
//     console.log(`Aqui está : ${num * array[i]}`)
// }2

for ( let i in array){
    console.log(`${num} * ${array[i]} = ${num * array[i]}`)
}