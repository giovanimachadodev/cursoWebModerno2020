function MeuObjeto(){

}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Giovani'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Priscila'
obj2.falar()
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
console.log(obj3.nome)

// Resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)