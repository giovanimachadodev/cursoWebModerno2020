const fs = require('fs')

const endereco = __dirname + "/arquivo.json"


//sincrono
const conteudo = fs.readFileSync(endereco, 'utf-8')

console.log(conteudo)

//assincrono
fs.readFile(endereco, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config)

//ler pasta
fs.readdir(__dirname, 'utf-8', (err, arquivos) =>{
    console.log(arquivos)
})
