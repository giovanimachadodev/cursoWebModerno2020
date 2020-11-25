const fs = require("fs")

const pessoa = {
    nome: 'Giovani',
    idade: 25,
    humano: true
}

fs.writeFile(__dirname + '/escritoArquivo.json', JSON.stringify(pessoa), err =>{
    console.log(err || 'Arquivo Salvo')
})