const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log((tecnologias.react))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'function'],
    [{}, 'Objeto'],
    [123, 'número']
])

chavesVariadas.forEach((chave, indice) => {
    console.log(indice, chave)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas)
console.log(chavesVariadas.size)