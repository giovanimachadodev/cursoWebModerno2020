const alunos = [
    {nome: 'Giovani', nota: 1, bolsista: false},
    {nome: 'Priscila', nota: 2, bolsista: false},
    {nome: 'Maria', nota: 3, bolsista: false},
]

// Imperativo

let total1 = 0

for (let i = 0; i < alunos.length; i++){
    total1+=alunos[i].nota
}

console.log(total1/alunos.length)

// Declarativo

const getNota = a => a.nota
const soma = (acomulador, atual) => acomulador + atual

total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)