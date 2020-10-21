const sequencia = {
    _valor: 1, //convenção  
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        this._valor = valor
    }
}

sequencia._valor = 100
console.log(sequencia.valor, sequencia.valor)