const valor = 'Global'

function valorAtual(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    valorAtual()
}

exec()