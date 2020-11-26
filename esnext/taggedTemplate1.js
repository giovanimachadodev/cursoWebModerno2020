// tagged template - processa o template dentro da função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Giovani'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
