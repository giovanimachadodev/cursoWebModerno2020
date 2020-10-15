//Forma Literal

function fun1 (){

}


// Armazenar em uma variável
const fun2 = function (){

}

// Armazenar em um array
const fun3 = []

fun3[0] = function imprimir (){
    console.log('Deu certo!')
}

fun3[0]()

// Armazenar em atributos de objetos

const fun4 = {
    a: function imprimir(){
        console.log('Deu certo!')
    }
}

fun4.a()

//Passar função com parametro

function fun5(fun){
    fun()
}

fun5(function (){
    console.log('Ok')
})

//Uma função pode conter/retornar uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(1,2)(3)