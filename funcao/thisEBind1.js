const pessoa = {
    nome: 'Giovani',
    falarNome(){
        console.log(this.nome)
    }
}

// pessoa.falarNome()

const falar = pessoa.falarNome.bind(pessoa)

falar()