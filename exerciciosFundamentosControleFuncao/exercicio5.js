function converterVirgula (valor){
    return `R$ ${(valor).toFixed(2).replace('.',',')}`
}

console.log(converterVirgula(0.300000123130))