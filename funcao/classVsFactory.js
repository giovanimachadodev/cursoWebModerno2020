//Class

class Pessoa {
    constructor (nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Giovani')

pessoa1.falar()

//Factory

const pessoa = nome =>{
    return {
        falar: () => console.log(`Olá meu nome é ${nome}`)
    }
}

const p2 = pessoa('João')
p2.falar()