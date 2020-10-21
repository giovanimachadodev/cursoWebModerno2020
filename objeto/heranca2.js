//Cadeia de protótipos (prototype chain)

const avo = {
    atb1: 'A'
}

const pai = {
    __proto__: avo,
    atb2: 'B'
}

const filho = {
    __proto__: pai,
    atb3: 'C'
}

console.log(filho.atb1)

// Exemplo 2

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual+=delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} KM/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 350 //shadowing
}

const volvo = {
    modelo: 'a1',
    status(){
        return `${this.modelo} ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(360)
console.log(ferrari.status())
console.log(volvo.status())