function area (largura, altura = 0){
    let area = largura * altura
    if(area >= 20){
        console.log(`Área acima do permitido ${area}`)
    }
    else{
        return area
    }
}

console.log(area(5, 2))
console.log(area())
console.log(area(2))
console.log(area(5, 5))
