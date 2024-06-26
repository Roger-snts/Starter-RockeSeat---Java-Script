
// 1 - Declare uma variável de nome weight

let weight

// 2 - Que tipo de dado ela possui?

console.log(typeof weight)

// 3 - Declare uma variável e atribua valores para name, age, stars, isSubscribed

let name = 'Aria'
let age = 30
let stars = 4.5
let isSubscribed = false


// 4 - A variável student abaixo é de que tipo de dado? R: Object
// 4.1 - Atribua a ela a mesma propriedade e valor do exercício 3
// 4.2 - Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> Kg.
// Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

let student = {
    name: 'Aria',
    age: 30,
    weight: 60.8,
    isSubscribed: false
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)

/*
    5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, 
    ou seja, somente o Array vazio
*/

let students = [];

// 6 - Atribua à variável do exercício anterior o student criado anteriormente

students = [
    student
]

console.log(students)

// 7 - Coloque no Console o valor da posição 0 do Array acima

console.log(student[0])

// 8 - Adicione um novo student à students

const martha = {
    name: "Martha",
    age: 45,
    weight: 55.7,
    isSubscribed: true
};

students = [
    student,
    martha
]

students[1] = martha

console.log(students)
