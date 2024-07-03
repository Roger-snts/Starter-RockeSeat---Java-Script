
/*
    FOR IN / PARA CADA ... EM

    For In é outro dos laços de repetição, e muito parecido com o "For Of", sendo que o que o 
    diferencia é a capacidade de trabalhar com propriedades de objetos. Enquanto o For Of 
    trabalha com propriedades de uma string ou array, o For In trabalha com propriedades de 
    Objetos.

    - Usado em Objetos

    Sintaxe:

    -   let pessoa = {nome: "Mika", idade: 24, cor_favorita: verde}
    -   for(let propriedade in pessoa){
            console.log(propriedade)     // O resultado será a Chave da propriedade, não o conteúdo

            conosle.log(pessoa.propriedade)     //  O resultado será o conteúdo, não a chave 
        }
*/

let person = {
    name: 'Jhuly',
    age: 21,
    favorite_color: green
}

for(let property in person){
    console.log(property)
    console.log(person.property)
}
