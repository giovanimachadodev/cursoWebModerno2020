function verificaAnoBissexto(ano){
    if(ano % 4 == 0 || ano % 400 == 0){
        return true
    }
    return false
}

console.log(verificaAnoBissexto(1604))