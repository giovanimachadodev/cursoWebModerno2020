const pessoa = {
    nome: 'Giovani',
    idade: 25,
    peso: 75.8
}

console.log(Object.keys(pessoa)) // Acessa as chaves
console.log(Object.values(pessoa)) // Acessa os valores
console.log(Object.entries(pessoa)) 

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}`)
});

Object.defineProperty(pessoa, 'dataNascimento', { // Define um atributo
    enumerable: true,
    writable: false,
    value: '01/07/1995'
})

pessoa.dataNascimento = '05/05/15'

console.log(pessoa.dataNascimento)

//Object.assign (ECMA 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //concatena

console.log(obj)