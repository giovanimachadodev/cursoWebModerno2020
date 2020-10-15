//factory simples

function criarPessoa(x, y){
    return {
        nome: x,
        idade: y
    }
}

console.log(criarPessoa('Giovani', 25))