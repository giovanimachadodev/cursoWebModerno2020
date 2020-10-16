let numeros = [10, 5, 4, 67, 12, 22, 9]

function verificaPares(vetor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            console.log(vetor[i])
        }
    }
}

verificaPares(numeros)