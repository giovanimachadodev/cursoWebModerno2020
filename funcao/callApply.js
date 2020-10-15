function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.1,
    getPreco
}

console.log(produto.getPreco())

//Call

const carro = {
    preco: 1000,
    desc: 0.1
}

console.log(getPreco.call(carro, 0.2, '$'))
console.log(getPreco.apply(carro, [0.1, 'U$']))