//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar variavéis externas à função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        const x = 'Mais dentro'
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())