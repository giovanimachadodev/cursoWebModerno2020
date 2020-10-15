// Armazenando uma função em varíavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(1, 4)

// Armazenando função arrow em uma varíavel
const soma = (a, b) => {
    console.log(a + b)
}

soma(5, 9)

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(7, 4))