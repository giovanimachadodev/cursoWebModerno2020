let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'


console.log(a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(this)

abc = 3 // Não fazer isso
console.log(global.abc)

