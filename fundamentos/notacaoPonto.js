console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'Bola'

console.log(obj.nome)

function Obj (nome){
    this.nome = nome
}

const obj1 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')

console.log(obj1.nome, obj2.nome)