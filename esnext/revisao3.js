// ES8: Object.values/ Object.entries
const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhoria notação literal
const nome = 'Giovani'
const pessoa = {
    nome,
    idade: 25,
    ola(){
        return 'Deu certo'
    }
}

console.log(pessoa)
console.log(pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Auau'
    }
}
console.log(new Cachorro().falar())
