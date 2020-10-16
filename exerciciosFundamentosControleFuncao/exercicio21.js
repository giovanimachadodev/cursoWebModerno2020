function convenios(idadeDependente){
    let fixo = 100
    if (idadeDependente >= 0 && idadeDependente <= 150){
        if(idadeDependente < 10){
            return 80 + fixo
        }
        else if(idadeDependente >= 10 && idadeDependente <= 30){
            return 50 + fixo
        }
        else if (idadeDependente > 30 && idadeDependente <= 60){
            return 95 + fixo
        }
        else {
            return 130 + fixo
        }
    }
    else{
        return 'Idade Inválida'
    }
}

console.log(`Valor a pagar: R$ ${convenios(8)}`)
console.log(`Valor a pagar: R$ ${convenios(25)}`)
console.log(`Valor a pagar: R$ ${convenios(37)}`)
console.log(`Valor a pagar: R$ ${convenios(68)}`)
console.log(`Valor a pagar: R$ ${convenios(178)}`)