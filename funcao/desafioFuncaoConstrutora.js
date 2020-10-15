function criarPessoa (nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new criarPessoa('Giovani')
p1.falar()