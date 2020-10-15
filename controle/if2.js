const teste = numero =>{
    if(numero > 7)
        console.log(numero)
        console.log('Final')
}

teste(5)
teste(8)

const teste2 = numero =>{
    if(numero > 5); { //Não usar ; com as estruturas de controle
        console.log(numero)
    }
}

teste2(7)
teste2(9)