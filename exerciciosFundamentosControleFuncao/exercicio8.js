let stringPontuacoes = "5, 5, 4, 7, 71, 6"
//let stringPontuacoes = [5, 5, 4, 14, 15, 6]


function avaliaPontuacoes (string){
    let pontuacoes = string.split(", ")
    let quebraRecordes = 0
    let maiorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            quebraRecordes++
        }
    }

    return [quebraRecordes, maiorPontuacao]
}

console.log(avaliaPontuacoes(stringPontuacoes))