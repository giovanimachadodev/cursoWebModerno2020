let valor //Undefined é quando a varíavel foi declarada e não iniciada
console.log(valor)

valor = null
console.log(valor) //Null é quando tem ausência de valor

//console.log(valor.toString()) // Erro!

const produto = {}

produto.preco = 3.50

console.log(produto)
produto.preco = undefined // Evitar definir como undefined
console.log(produto)