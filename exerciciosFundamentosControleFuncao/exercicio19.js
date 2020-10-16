function calculaLanche(codigo, quantidade){
    switch (codigo){
        case 100:
            return `Código: 100
            Descrição: Cachorro Quente 
            Preço Unitário: R$ 3,00
            Quantidade: ${quantidade}
            Total à pagar: R$ ${quantidade * 3}`
            break
        case 200:
            return `Código: 200
            Descrição: Hambúrguer Simples
            Preço Unitário: R$ 4,00
            Quantidade: ${quantidade}
            Total à pagar: R$ ${quantidade * 4}`
            break
        case 300:
            return `Código: 300
            Descrição: Cheeseburguer
            Preço Unitário: R$ 5,50
            Quantidade: ${quantidade}
            Total à pagar: R$ ${quantidade * 5.5}`
            break
        case 400:
            return `Código: 400
            Descrição: Bauru
            Preço Unitário: R$ 7,50
            Quantidade: ${quantidade} 
            Total à pagar: R$ ${quantidade * 7.5}`
            break
        case 500:
            return `Código: 500
            Descrição: Refrigerante
            Preço Unitário: R$ 3,50
            Quantidade: ${quantidade}
            Total à pagar: R$ ${quantidade * 3.5}`
            break
        case 600:
            return `Código: 600
            Descrição: Suco 
            Preço Unitário: R$ 2,80
            Quantidade: ${quantidade}
            Total à pagar: R$ ${quantidade * 2.8}`
            break
        default:
            return 'Produto não existe.'
    }
}

console.log(calculaLanche(100, 2))
console.log(calculaLanche(200, 2))
console.log(calculaLanche(300, 2))
console.log(calculaLanche(400, 2))
console.log(calculaLanche(500, 2))
console.log(calculaLanche(600, 2))
console.log(calculaLanche(700, 2))