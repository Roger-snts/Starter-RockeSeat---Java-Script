
/*
    Funções Construtoras

    As funções construtoras são as responsáveis por criar modelos de Objetos / Objects
    -   Criadas a partir de uma função vazia, precedida pela palavra new
*/

function Person(name) {      // Recomenda-se que o nome delas comecem com letra maiúscula
    this.name = name,        // Agora, para criar variáveis ou propriedades, usa-se "this"
    this.walk = function () {
        return this.name + " está caminhando."
    }
};

const roger  = new Person('Roger')      // Agora roger possui as propriedades de Person
const santos = new Person('Santos')     // Assim como santos, que também as possui

console.log(roger)
console.log(santos)
console.log(roger.walk)
console.log(santos.walk)

// Existem outros tipos de construtores já criados, tais como

let date = new Date('2024-05-14')
let letters = new String('letras')

console.log(date)
console.log(letters)
