// setTimeout(() =>{
//     console.log('Executando 1')

//     setTimeout(()=>{
//         console.log('Executando 2')

//         setTimeout(()=>{
//             console.log('Executando 3')
//         }, 2000)

//     }, 2000)

// }, 2000)

function esperarPor(tempo = 2000){
    return  new Promise(function(resolve){
        setTimeout(function(){
            console.log('Exec')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)
