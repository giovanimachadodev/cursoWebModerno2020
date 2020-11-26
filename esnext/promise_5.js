function funcionarOuNao(valor, chanceErro){
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }
        else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando', 0.8)
    .then(console.log)
    .catch(err => console.log(`Erro : ${err}`))