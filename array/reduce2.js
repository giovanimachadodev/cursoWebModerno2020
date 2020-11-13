const alunos = [
    {nome: 'Giovani', nota: 1, bolsista: false},
    {nome: 'Priscila', nota: 2, bolsista: false},
    {nome: 'Maria', nota: 3, bolsista: false},
]
const todosBolsistas = alunos.map(e => e.bolsista).reduce((acomulador, atual) => acomulador && atual)
const algumBolsista = alunos.map(e => e.bolsista).reduce((acomulador, atual) => acomulador || atual)





console.log(todosBolsistas)
console.log(algumBolsista)