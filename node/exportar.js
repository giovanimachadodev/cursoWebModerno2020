console.log(module.exports)
console.log(this === module.exports)
console.log(this === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

exports = {
    d: 4
}

module.exports = {
    novo: "Oi"
}
console.log(module.exports)