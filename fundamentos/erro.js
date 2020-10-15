function tratarErroELancar(erro){
    throw new Error('Tá errado')
}

function nomeGritado (obj) {
    try{
         console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {
    nome: 'Giovani'
}

nomeGritado(obj)