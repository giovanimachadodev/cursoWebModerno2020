// criação literal

const obj1 = {
    
}

// Object em JS
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 1, 0.1)
console.log(p1.getPrecoComDesconto())

//Funções Factories
function criarFuncionario(nome, idade, cargo){
    return {
        nome,
        idade,
        cargo,
        getMostrarDados(){
            return (`
            Nome: ${nome}
            Idade: ${idade}
            Cargo: ${cargo}`)
        }
    }
}

const f1 = criarFuncionario('Giovani', 25, 'Programador')
console.log(f1.getMostrarDados())

//Object.create
const filha = Object.create(null)
filha.nome = 'Priscila'
console.log(filha)

//Uma função que retorna JSON em objeto

const animal = JSON.parse('{"nome": "Trovão", "tipo": "Gato"}')
console.log(animal)