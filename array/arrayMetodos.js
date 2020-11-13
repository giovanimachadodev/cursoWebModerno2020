const alunos = ['A', 'B', 'C', 'D']
alunos.pop() // Remove o último elemento
alunos.push('E') //Adiciona elemento na última posição
alunos.shift() // Remove o primeiro elemento
alunos.unshift('-A') // Adiciona no início

let algunsAlunos = alunos.slice(2) // Pega uma parte do array
algunsAlunos = alunos.slice(1, 3) // Pega uma parte do array
console.log(alunos)
console.log(algunsAlunos)