const quaseArray = {0: 'A', 1: 'B', 2: 'C'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray.toString())