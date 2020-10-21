console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Giovani'.reverse())

Array.prototype.first = function(){
    return this[0]
}

const notas = [1, 2, 3, 4, 5]
console.log(notas.first())