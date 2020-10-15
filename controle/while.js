function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao <=10){
    console.log(getInteiroAleatorioEntre(10, 50))
    opcao++
}