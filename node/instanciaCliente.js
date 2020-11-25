const a = require("./instanciaUnica")
const b = require("./instanciaUnica")
const c = require("./instanciaNova")()
const d = require("./instanciaNova")()

a.incrementar()
a.incrementar()

console.log(b.valor)

c.incrementar()
c.incrementar()

console.log(d.valor)

