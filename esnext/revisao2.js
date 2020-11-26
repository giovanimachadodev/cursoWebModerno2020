//arrow function
const soma = (a, b) => a + b
console.log(soma(1, 2))

//arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
const pessoa = (nome = 'Giovani', idade = 25) => console.log(nome, idade)

pessoa()

//operador rest
function total (...numeros){
    let total = 0
    numeros.forEach(e => total+= e)
    return total
}

console.log(total(1, 2, 5, 10))