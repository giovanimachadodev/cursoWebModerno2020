// Par Chave/Valor

const saudacao = 'Olá' // Contexto 1 Global

function exec (){
    const saudacao = 'Oláa' // Contexto 2 
    return saudacao
}

const cliente = { // Contexto 3 
    nome: 'Giovani', 
    idade: 25,
    endereco: {
        logradouro: 'Rua 1',
        numero: 177
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

  