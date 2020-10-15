//exercicio factory 2

function criarProduto(nome, preco, desconto = 0.1){
    return {
        nome,
        preco,
        precoComDesconto: (preco - (preco * desconto))
    }
}

console.log(criarProduto('Geladeira', 2000))