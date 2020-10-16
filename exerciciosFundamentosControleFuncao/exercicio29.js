let vetor = [ 5, 10, 11, 16, 1, 90, 51]

function verificaIntervalos(array){
    let contadorDentroIntervalo = 0
    let contadorForaIntervalo = 0

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 10 && array[i] <=20){
            contadorDentroIntervalo++
        }
        else{
            contadorForaIntervalo++
        }
    }
    return {
        contadorDentroIntervalo,
        contadorForaIntervalo
    }
}

console.log(verificaIntervalos(vetor))