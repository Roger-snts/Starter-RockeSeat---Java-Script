
// Vamos manipular os elementos de um Array

// Siga o passo a passo

let technologies = ["HTML", "CSS", "JS"]

// Adicione um elemento no fim do array

technologies.push("NodeJS")
console.log(technologies)

// Adicione um elemento no início do array

technologies.unshift("SQL")
console.log(technologies)

// Remova o fim

technologies.pop()
console.log(technologies)

// Remova o início

technologies.shift()
console.log(technologies)

// Pege apenas alguns elementos do array

console.log(technologies.slice(1, 3))

// Remova um ou mais itens em qualquer posição do array

technologies.splice(1, 2)
console.log(technologies)

// Encontre a posição de um elemento no array

let index = technologies.indexOf("CSS")
console.log(technologies[index])

