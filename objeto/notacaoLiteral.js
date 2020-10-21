const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

const nome = 'a'
const valor = a

const obj3 = {}
obj3[nome] = valor

const obj4 ={[nome]: a}

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){
        // ...
    }
}

console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)