//Object.preventExtensions - Não consegue adicionar atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('É extensivo: ' + Object.isExtensible(produto))

produto.nome = 'Lápis'
produto.descricao = 'FaberCastel'
delete produto.tag
console.log(produto)

// Object.seal - Não consegue adicionar e nem excluir
const pessoa = Object.seal({
    nome: 'Giovani',
    idade: 25
})

pessoa.nome = 'Priscila'
pessoa.sexo = 'F'
delete pessoa.idade
console.log('Está selado: ' + Object.isSealed(pessoa))

console.log(pessoa)

//Object.freeze  = selado + dados constantes

const carro = Object.freeze({
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1998
})
console.log('O item está freezado: ' + Object.isFrozen(carro))
console.log(carro)

carro.marca = 'Sei lá'
console.log(carro)

