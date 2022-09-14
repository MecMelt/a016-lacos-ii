const array = [
[27, 4, 20, 13, 14], // TEMPORADA 1
[11, 15, 12, 8, 9], // TEMPORADA 2
[5, 5, 12, 16, 4], // TEMPORADA 3
[20, 33, 11, 12, 19], // TEMPORADA 4
[3, 3, 4, 5, 10] // TEMPORADA 5
]

//Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

 for ( let i in array){
   let temporada = `Jogador ${Number(i)+1} - `
   //console.log(temporada)
   for ( let j of array [i]){
        temporada += `${j} , `
    }
     console.log(temporada)
 }

// for(let i in array){
//     console.log(`Jogador ${Number(i)+1} : ${array[i]}`)
// }1
