function progressaoAritmetica(n, a1, r){
    let resultado = 0
    for (let i = 0; i < n; i++) {
        resultado = a1 + (r * i)
        console.log(resultado)
    }
}

function progressaoGeometrica(n, a1, r){
    let auxiliar = []
    let resultado = 2
    for (let i = 0; i < n ; i++) {
        auxiliar.push(resultado)
        resultado = (resultado * r)
    }
    return auxiliar
}


/*
function progressaoGeometrica(n, a1, r){
    let resultado = a1
    for (let i = 1; i < n ; i = i + 2) {
        resultado = a1 * i
        console.log(resultado)  
    }
}*/

//progressaoAritmetica(5, 2, 3 )

console.log(progressaoGeometrica(5, 2, 3 ))