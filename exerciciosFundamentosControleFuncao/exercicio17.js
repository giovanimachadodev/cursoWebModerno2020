const aumentoFuncionario = (plano, salarioAtual) => {
    switch (plano){
        case 'a':
            return salarioAtual * (1 + 0.1)
            break
        case 'b':
            return salarioAtual * (1 + 0.15)
            break
        case 'c': 
            return salarioAtual * (1 + 0.2)
            break
        default:
            return 'Plano Inválido'
    }
}

console.log(aumentoFuncionario('a', 1000))
console.log(aumentoFuncionario('b', 1000))
console.log(aumentoFuncionario('c', 1000))
console.log(aumentoFuncionario('d', 1000))