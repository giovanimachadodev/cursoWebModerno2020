function gerarNumerosEntre(min, max ,tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(function(resolve){
        setTimeout(()=>{
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        } ,tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 40, 1000), 
        gerarNumerosEntre(50, 100, 5000)
    ])
}

gerarNumerosEntre()
    .then(gerarVariosNumeros)
    .then(console.log)