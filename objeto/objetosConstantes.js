// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Giovani'
}
pessoa.nome = 'Giovani Machado'

console.log(pessoa)


/*  

pessoa -> 456 -> {...}

pessoa = {
    nome: 'Priscila'
}

*/

Object.freeze(pessoa)

pessoa.nome = 'Gio'

console.log(pessoa)