let pessoa = JSON.parse('{"nome": "Matheus","idade": 26,"estetica": {"altura": 1.78,"peso": 82}}')
console.log(`Pessoa: ${pessoa.nome}.
Idade: ${pessoa.idade}.
Altura: ${pessoa.estetica.altura}.
Peso: ${pessoa.estetica.peso}.`)
console.log(pessoa)
