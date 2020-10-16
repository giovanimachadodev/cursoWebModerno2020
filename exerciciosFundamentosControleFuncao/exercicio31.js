let vetorNumeros = [6, 20, -13, 55, -22, -91, 14, 4, 23]

function contarNegativos(vetor){
    let contadorDeNegativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0){
            contadorDeNegativos++
        }
        
    }

    return contadorDeNegativos
}

console.log(contarNegativos(vetorNumeros))