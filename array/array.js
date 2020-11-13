console.log(typeof Array, typeof new Array, typeof [])

// Tipos de criação de um array

const tipo1 = new Array('A', 'B', 'C')
const tipo2 = ['C', 'B', 'A']
console.log(tipo1)
console.log(tipo2)

// Funções para serem usadas com Array

tipo2.sort() // Ordena o array por ordem alfabética
delete tipo2[1] // Deleta elemento e deixa posição vazia
tipo2.splice(1, 2) //Exclui ou adiciona elementos
console.log(tipo2)