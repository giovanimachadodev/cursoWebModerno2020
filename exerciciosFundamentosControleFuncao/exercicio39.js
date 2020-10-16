let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

function trocaVetor(vetor1, vetor2){
    for (let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }
    return {
        vetor1,
        vetor2
    }
}

console.log(trocaVetor(vetor1, vetor2))