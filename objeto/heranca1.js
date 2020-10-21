const fusca = {
    modelo: 'a1',
    velMax: 120
}

const uno = {
    modelo: 'especial',
    velMax: 150
}

console.log(fusca.__proto__)
console.log(uno.__proto__)
console.log(uno.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function minhaFuncao(){

}

console.log(typeof Object, typeof minhaFuncao)
console.log(Object.prototype, minhaFuncao.prototype)