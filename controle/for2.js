const notas = [1, 2, 3, 4, 5]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Giovani',
    idade: 25,
    altura: 1.77
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}