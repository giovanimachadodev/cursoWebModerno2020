const gerarInteiroEntre = (min, max) => {
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

let opcao = 0

do{
    opcao = gerarInteiroEntre(0, 10)
    console.log(opcao)
} while (opcao != 0)