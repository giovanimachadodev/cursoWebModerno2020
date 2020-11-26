const fs = require('fs')
const { get } = require('http')
const { resolve } = require('path')

const caminho = __dirname + '/dados.txt'


function GetDados(caminho){
    return new Promise(resolve => {
    fs.readFile(caminho, function(_, conteudo){
        resolve(conteudo.toString())
        console.log('Depois de ler')
    })
    })
}

GetDados(caminho)
    .then(console.log)