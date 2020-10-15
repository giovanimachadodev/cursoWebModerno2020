const soma = function(a, b){
    return a + b
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(5, 1, (a, b) =>{
    return a - b
})

const pessoa = {
    nome: function (){
        console.log('Ola')
    }
}

pessoa.nome()