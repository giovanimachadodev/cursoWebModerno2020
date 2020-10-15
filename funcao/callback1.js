let nomes = ['Giovani', 'Priscila', 'Lavinia']

/* function imprimir(){
    for(x in nomes){
        console.log(`${x} - ${nomes[x]}`)
    }
}

imprimir() */

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

nomes.forEach(imprimir)