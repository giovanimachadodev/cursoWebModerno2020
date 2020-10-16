function comparaAlturas(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
    let contador1 = 0
    let contador2 = 0
    if(altura1 > altura2){
        while (altura1 > altura2) {
            altura2 += taxaCrescimento2
            contador2++
        }
        console.log(contador2)
    }
    else{
        while (altura2 > altura1) {
            altura1 += taxaCrescimento1
            contador1++
        }
        console.log(contador1)
    }
}
comparaAlturas(50, 10, 30, 10)