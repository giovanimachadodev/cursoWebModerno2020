const verificaFrutas = (fruta) => {
    switch (fruta){
        case 'maça':
            return 'Não vendemos maça aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Fruta inválida'
    }
}

console.log(verificaFrutas('melao'))