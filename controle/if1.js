const soBoaNoticia = nota => {
    if (nota >= 7){
        console.log(nota)
    }
}

soBoaNoticia(7)

const seForVerdadeEuFalo = valor =>{
    if(valor){
        console.log('É verdade' + valor)
    }
}

console.log('Falsos')
seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')

console.log('Verdadeiros')
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
