function bhaskara(a, b, c){
    let delta = (Math.pow(b, 2) - (4 * a * c))
    if(delta > 0){
        let resultados = []
        resultados.push(((-b) + (Math.sqrt(delta))) / (2 * a)) 
        resultados.push(((-b) - (Math.sqrt(delta)))/ (2 * a))
        return resultados
    }
    else{
        return 'O delta é negativo'
    }
}

console.log(bhaskara(3, -15, 12))
console.log(bhaskara(7, 3, 4))