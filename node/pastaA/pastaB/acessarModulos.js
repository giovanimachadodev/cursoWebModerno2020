const moduloA = require ("../../moduloA")
console.log(moduloA.ola)

const moduloTeste = require("saudacoes")
console.log(moduloTeste.mensagem)

const c = require('./pastaC')
console.log(c.ola2)

const http = require("http")
http.createServer((req, res) => {
    res.write('Bom dia ooo/')
    res.end()
}).listen(8080)