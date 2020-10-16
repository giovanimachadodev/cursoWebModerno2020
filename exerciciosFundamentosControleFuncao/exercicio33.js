let vetorInteiro = [ 1, 2, 3, 4]
let vetorString = ['1', '2', '3', '4']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]
let vetorResultado1 = [].concat(vetorInteiro, vetorString, vetorDouble)
let vetorResultado2 = vetorInteiro.concat(vetorString , vetorDouble)
console.log(vetorResultado1)
console.log(vetorResultado2)