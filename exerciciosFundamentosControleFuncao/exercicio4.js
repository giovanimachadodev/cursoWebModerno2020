const restoDaDivisao = (dividendo, divisor) => {
    return {
        resultado: dividendo / divisor,
        resto: dividendo % divisor
    }
}

console.log(restoDaDivisao(20, 7))