const { valor, incremetar } = require("./instanciaUnica")

module.exports = () => {
    return {
        valor: 1,
        incrementar(){
            this.valor++
        }
    }

}