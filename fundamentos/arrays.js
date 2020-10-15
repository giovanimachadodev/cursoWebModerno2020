const array = [1, 2, 3, 4.4]
console.log(array[0], array[3])
console.log(array[4])

array[4] = 'Giovani'

console.log(array)

array[10] = 'Testando'
console.log(array.length) // contagem do array  

console.log(array)

array.push(15, {id:2}, [1, 2, 3]) //Adiciona no final do array

console.log(array)

console.log('Testando Pop')
const array2 = array.pop() // Extrai o último elemento
delete array[0] // Deleta o elemento
console.log(array2)
console.log(array)