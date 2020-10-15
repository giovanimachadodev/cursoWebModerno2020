//Novo recurso do ECMA 2015

const pessoa = {
    nome: 'Giovani',
    idade: 25,
    endereco: {
        logradouro: 'Rua 1',
        numero: 100
    }
}

const { nome, idade} = pessoa

console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`)

//Mudando o nome das variaveis

const {nome: n, idade: i} = pessoa
console.log(`Olá meu nome é ${n} e tenho ${i} anos.`)
