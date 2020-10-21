const pai = {
    nome: 'Pedro',
    corDeCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Lavínia'
console.log(filha1.nome, filha1.corDeCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Maria Eduarda',
        writable: true,
        enumerable: true
    }
})

console.log(filha2, filha2.corDeCabelo)

for(let key in filha1){
    filha1.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}