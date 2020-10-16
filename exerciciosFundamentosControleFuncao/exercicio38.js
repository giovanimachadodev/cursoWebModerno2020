function retornarImpares(inicio, fim){
    if(inicio > fim){
        for (let i = fim; i < inicio; i++) {
            if(i % 2 != 0){
                console.log(i)
            }
        }
    }
    else{
        for (let i = inicio; i < fim; i++) {
            if(i % 2 != 0){
                console.log(i)
            }
        }
    }
}

retornarImpares(100, 0)