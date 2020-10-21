const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma (){
        return a + b +c
    }
}

console.log(obj)

//Convertendo objeto em JSON
console.log(JSON.stringify(obj))

// Convertendo JSON em objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))