const escola = [
    {
        nome: 'Turma 01',
        alunos: [{
            nome: 'Gustavo',
            nota: 8.1
        },
        {
            nome: 'Giovani',
            nota: 9
        },
        {
            nome: 'Maria',
            nota: 6.4
        }]
    },
    {
        nome: 'Turma 02',
        alunos: [{
            nome: 'Fulano 1',
            nota: 4
        },
        {
            nome: 'Fulano 2',
            nota: 8
        },
        {
            nome: 'Fulano 3',
            nota: 3
        }]
    }
]

const getNotaAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)