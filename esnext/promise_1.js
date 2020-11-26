const primeiroElemento = array => array[0]
const primeiraLetra = elemento => elemento[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise((resolve) => {
    resolve(['Giovani', 'Priscila', 'Lavínia'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(valor => console.log(valor))