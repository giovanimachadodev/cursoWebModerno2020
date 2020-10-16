function calculaMedia(codigoAluno, nota1 , nota2, nota3){
        let media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10
    
        if(media >= 5){
            return `Aprovado - Média ${media}`
        }
        else{
            return `Reprovado - Média ${media}`
        }
}

console.log(calculaMedia(001, 5 , 5, 10))