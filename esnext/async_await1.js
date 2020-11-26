function esperarPor(tempo = 2000){
    return  new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

// esperarPor()
//     .then(() => console.log('Executando'))


async function executar(){
    await esperarPor(2000)
    console.log('Async/Await 1')

    await esperarPor(2000)
    console.log('Async/Await 2')

    await esperarPor(2000)
    console.log('Async/Await 3')
}

executar()