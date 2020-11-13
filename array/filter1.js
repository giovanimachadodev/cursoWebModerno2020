const produtos = [
    {nome: 'Notebook', preco: 3001, fragil: true},
    {nome: 'Ipad', preco: 5000, fragil: false},
    {nome: 'Copo', preco: 10, fragil: true},
    {nome: 'Copo P', preco: 5, fragil: false},
]

const maiorQue3000 = e => e.preco > 3000
const ehFragil = e => e.fragil === true

resultado = produtos.filter(maiorQue3000).filter(ehFragil)

console.log(resultado)