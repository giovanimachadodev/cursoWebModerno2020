function avaliaAlunos (nota){
    let diferenca = 10 - (nota % 5)
    if(nota >= 38){
        if(nota % 5 == 0){
            return nota
        }
        else if (diferenca <= 7){
            return nota + (diferenca % 5)
        }
        else{
            return nota
        }
    }
    else{
        return 'Aluno Reprovado'
    }
    }
console.log(avaliaAlunos(37))
