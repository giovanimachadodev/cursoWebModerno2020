function numeroPorExtenso (numero){
    switch (numero){
        case 1: 
            return 'Um'
            break
        case 2: 
            return 'Dois'
            break
        case 3: 
            return 'Três'
            break
        case 4: 
            return 'Quatro'
            break
        case 5:
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7: 
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break
        case 10:
            return 'Dez'
            break
        default:
            return 'Número fora do intervalo.'
    }
}

for(let i = 1; i <= 11; i++){
    console.log(numeroPorExtenso(i))
}