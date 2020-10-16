function calculadora(x, y, operacao){
    switch (operacao){
        case '+':
            return x + y
            break
        case '-':
            return x - y
            break
        case '*':
            return x * y
            break
        case '/':
            return x / y
            break
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(10, 5, '+'))
console.log(calculadora(10, 5, '-'))
console.log(calculadora(10, 5, '*'))
console.log(calculadora(10, 5, '/'))
console.log(calculadora(10, 5, 'l'))