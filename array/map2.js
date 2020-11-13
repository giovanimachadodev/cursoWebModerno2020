const carrinho = [
    '{"nome": "borracha", "preco": 1.00}',
    '{"nome": "lapis", "preco": 2.00}',
    '{"nome": "caneta", "preco": 3.00}',
]
const paraObjeto = json => JSON.parse(json)
const paraPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(paraPreco)

console.log(resultado)