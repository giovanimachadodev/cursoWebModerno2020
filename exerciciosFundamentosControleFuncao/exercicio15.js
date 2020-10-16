const venderCarros = (modelo) => {
    switch (modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso!'
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            return 'Tem certeza que não prefere esse modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de modelo'
    }
}

console.log(venderCarros('hatch'))
console.log(venderCarros('sedans'))
console.log(venderCarros('motocicletas'))
console.log(venderCarros('caminhonetes'))
console.log(venderCarros('bicicletas'))
