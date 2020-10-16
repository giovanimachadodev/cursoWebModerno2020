function verificarTriangulo (a, b, c){
    if(a === b && a === c){
        return 'Equilátero'
    }
    else if((a === b && b !== c) || (b === c && b !== a) || (a === c && a !== b)){
        return 'Isósceles'
    }
    else{
        return 'Escaleno'
    }
}

console.log(verificarTriangulo(10, 5, 8))