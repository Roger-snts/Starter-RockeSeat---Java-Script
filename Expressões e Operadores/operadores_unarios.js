
/*
    Operadores Unários

    São operadores que são invocados através de uma única palavra, sem 
    uso de expressão

    Existem 2 atualmente:

    - Typeof    => Informa o tipo do dado que vem a seguir
    - delete    => Deleta o dado que vem a seguir, desde que o mesmo exista
*/

let person = {
    name: 'Roger',
    age: 21
}

console.log(person)         // Retorna o conteúdo da variável person

console.log(typeof person)  // Retorna o tipo da variável person

delete person.age           // Deleta a propriedade age que existia em person

console.log(person)         // Retorna o conteúdo da variável person
