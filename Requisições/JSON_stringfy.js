let pessoa = {nome: 'Matheus', idade: 26, estetica: {altura: 1.78, peso: 82}}
let pessoaString = JSON.stringify(pessoa)
console.log('Objeto JSON puro:', pessoa)
console.log(`Objeto JSON stringified: ${pessoaString}`)
