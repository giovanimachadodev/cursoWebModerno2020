// operador ... rest(juntar), spread(espalhar)

//usar spread com objeto

const funcionario = {nome: 'Giovani', salario: 2000}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['A', 'B', 'C']
const grupoB = [...grupoA, 'D', 'E', 'F']
console.log(grupoB)

// rest
const soma = (...valores) => {
    let total = 0
    valores.forEach(e => total+=e )
    return total
}

console.log(soma(1, 2, 3, 5))