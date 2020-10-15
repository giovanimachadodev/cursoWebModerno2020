let contador = 1

while (contador <= 10){
    console.log('While ' + contador)
    contador++
}

for(let i = 1; i <= 10; i++){
    console.log('For ' + i)
}

//Percorrer Array

const numeros = [1 , 2, 3, 4, 5]
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}