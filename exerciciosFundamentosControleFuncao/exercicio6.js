function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    return (capitalInicial * taxaDeJuros) * tempoDeAplicacao
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let total = 0
    for (let i = 0; i < tempoDeAplicacao; i++) {
        total +=  (capitalInicial + total) * taxaDeJuros
    }
    return total
}



console.log(jurosSimples(2000, 0.05, 4))
console.log(jurosComposto(2000, 0.05, 4))