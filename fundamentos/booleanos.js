let isAtivo = true
console.log(isAtivo)

// Os Verdadeiros
console.log(!!3)
console.log(!!isAtivo)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = 1))

// Os Falsos
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!'')
console.log(!!NaN)
console.log(!!(isAtivo = 0))
// Exemplo 
console.log((0 || null || undefined || 123))
//Exemplo na prática
let nome = ''
console.log(nome || 'Desconhecido')
