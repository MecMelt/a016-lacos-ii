//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings 
//em formato de ranking, como no exemplo abaixo:

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let rank = 1

for ( let i of maioresPaises){
    console.log(`${rank++} - ${i}`)
}





// for ( let i in maioresPaises){
//      console.log(`Rank ${Number(i)+1} - ${maioresPaises[i]}`)
// }

