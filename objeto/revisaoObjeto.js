//coleção dinâmica de pares chave/valor
const objeto = new Object
objeto.nome = 'Geladeira'
objeto.preco = 2000

console.log(objeto)

delete objeto.preco

console.log(objeto)

const carro = {
    modelo: 'Onix',
    preco: 50000,
    proprietario: {
        nome: 'Giovani',
        idade: 25,
        endereco: {
            logradouro: 'Lucas Nogueira Garcês',
            numero: 177
        }
    },
    condutores: [
        {
            nome: 'Priscila',
            idade: 22
        },
        {
            nome: 'Giovani',
            idade: 25
        }],
    avaliarSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 10
carro['proprietario']['endereco']['numero'] = 60
console.log(carro)