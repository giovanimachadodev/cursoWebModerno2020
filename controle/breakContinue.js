const numero = []

for (let i = 0; i < 10; i++){
    numero[i] = i
}

//break

for (let num in numero){
    if (num == 5){
        break
    }
    console.log(`${num} = ${numero[num]}`)
}

//continue

for (let numc in numero){
    if(numc == 5){
        continue
    }
    console.log(`${numc} = ${numero[numc]}`)
}

//criando rotulo

externo: for(let a = 0; a < 5; a++){
    for(let b = 0; b < 5; b++){
        console.log(b)
        if(a == 2 && b == 3){
            break externo
        }
        console.log(` teste ${a}`)
    }
}