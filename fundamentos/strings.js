const escola = 'Cod3r'

console.log(escola.charAt(4)) //Mostra a 4ª letra da palavra
console.log(escola.charAt(5)) //Mostra 1 espaço
console.log(escola.charCodeAt(4)) // Mostra o número que representa a letra na tabela unicode
console.log(escola.indexOf('r')) //Mostra em que índice está
console.log(escola.substring(2)) //Inicia a palavra no parâmetro
console.log(escola.substring(0, 3)) //Inicia a palavra no 0 e termina no 2

console.log('Escola '.concat(escola)) //concatena
console.log('Escola ' + escola) //concatena
console.log(escola.replace(3 , 'e')) //Substitui o número 3 por a letra e
console.log('Ana, Maria, Pedro'.split(',')) // Transforma em array