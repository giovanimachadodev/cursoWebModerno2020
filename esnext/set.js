// não aceita repetição/ não é indexada
const times = new Set()
times.add('Flamengo')
times.add('Santos').add('São Paulo').add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Santos'))
times.delete('São Paulo')
console.log(times)

const nomes = ['Giovani', 'Priscila', 'Lavínia', 'Giovani']

const exemplo = new Set(nomes)

console.log(exemplo)