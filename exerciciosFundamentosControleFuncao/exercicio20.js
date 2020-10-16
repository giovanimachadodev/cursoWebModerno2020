function trocoDinheiro(valor){
    let notas200 = 0
    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let notas2 = 0
    let notas1 = 0

    while(valor > 0){
        if (valor >= 200){
            notas200 = Math.floor(valor/200)
            valor = valor % 200
        }
        else if (valor >= 100){
            notas100 = Math.floor(valor/100)
            valor = valor % 100
        }
        else if (valor >= 50){
            notas50 = Math.floor(valor/50)
            valor = valor % 50
        }
        else if(valor >= 20){
            notas20 = Math.floor(valor/20)
            valor = valor % 20
        }
        else if(valor >= 10){
            notas10 = Math.floor(valor/10)
            valor = valor % 10
        }
        else if (valor >= 5){
            notas5 = Math.floor(valor/5)
            valor = valor % 5
        }
        else if (valor >= 2){
            notas2 = Math.floor(valor/2)
            valor = valor % 2
        }
        else if (valor >= 1){
            notas1 = Math.floor(valor/1)
            valor = valor % 1
        }
    }

    return {
        notas200,
        notas100,
        notas50,
        notas20,
        notas10,
        notas5,
        notas2,
        notas1
    }

}

console.log(trocoDinheiro(433))
