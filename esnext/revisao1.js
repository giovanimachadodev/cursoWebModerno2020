//let e const
{
    var a = 2
    let b = 3
}
console.log(a)
//console.log(b) escopo de bloco

//template string
const produto = 'TV'
console.log(`Esse produto é uma ${produto}`)

//destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l)

const [x, , y] = [1, 2, 3]
console.log([x, y])

const {idade: i, nome} = {idade: 25, nome: 'Giovani'}
console.log(i, nome)