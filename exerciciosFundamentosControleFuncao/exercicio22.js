function anuidade(valor, mes){
    for(let i = 1; i < mes; i++){
        if(mes == 1){
            return valor
        }
        else {
            valor = valor + (valor * 0.05)
        }
    }

    return valor.toFixed(2)
}

console.log(anuidade(100, 8))
