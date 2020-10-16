let notas = [5, 4, 3, 2 ,1]

function avaliarAlunos(notas){
    let soma = 0
    let media = 0
    for(i= 0; i < notas.length; i++){
        soma+=notas[i]
    }

    media = soma/notas.length

    if(media >= 9 && media <= 10){
        return 'A'
    }
    else if (media >= 7 && media < 9){
        return 'B'
    }
    else if (media >= 5 && media < 7){
        return 'C'
    }
    else if (media >= 0 && media < 5){
        return 'D'
    }

}

console.log(avaliarAlunos(notas))