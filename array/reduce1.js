const alunos = [
    {nome: 'Giovani', nota: 1, bolsista: false},
    {nome: 'Priscila', nota: 2, bolsista: false},
    {nome: 'Maria', nota: 3, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce((acomulador, atual) => {
    console.log(acomulador, atual)
    return acomulador + atual
}
)

console.log(resultado)