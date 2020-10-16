let vetorNumeros = [6, 20, 13, 55, 22, 91, 14, 4, 23]

function verificaMaior(vetor){
    let maior = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }

    return maior
}

function verificaMenor(vetor){
    let menor = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }

    return menor
}

console.log(verificaMaior(vetorNumeros))
console.log(verificaMenor(vetorNumeros))