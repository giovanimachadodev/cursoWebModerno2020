let vetorNumeros = [6, 20, 13, 55, 22, 91, 14, 4, 23]

function calculaMediaVetor (vetor){
    let soma = 0
    let media = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    media = soma / vetor.length
    return media
}

console.log(calculaMediaVetor(vetorNumeros))