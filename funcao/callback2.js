const notas = [1, 2, 3, 4, 5]

//sem callback - notas baixas

let notasbaixas = []

for (let i = 0; i < notas.length; i++) {
    if(notas[i] <= 3){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

// Com callback

notasbaixas = notas.filter(function(nota){
    return nota <= 4
})

console.log(notasbaixas)