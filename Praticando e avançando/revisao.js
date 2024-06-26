
{
    // Variáveis e tipos de dados
    // Declaração or Declaration
    var name

    // Atribuindo valor or Assignment
    name = "Roger"

    // Tipo de dado or Type of data
    console.log(typeof name)

    // Agrupamento de declarações
    let age, isHuman
    
    age = 21
    isHuman = true

    // Múltiplos argumentos na função
    console.log(name, age, isHuman)

    // Escrita de texto + variáveis
    console.log("O " + name + " tem " + age + " anos e a humanidade é " + isHuman + ".")

    // Interpolando valores com Template Literals / Template Strings
    console.log(`O ${name} tem ${age} anos e sua humanidade é ${isHuman}.`)

    // Objetos or Objects
    const person = {
        name: "Auria",
        age: 14,
        weight: 66.4,
        isAdmin: true
    }

    console.log(person.name, person.age, person.weight)
    
    // Listas or Arrays
    const animals = [
        "Leão", 
        "Mamaco", 
        "Gato", 
        "Búfalo", 
        "Girafa",
        {
            name: "Gato Filhote",
            age: 6
        }
    ]

    console.log(animals[0], animals[1], animals[2], animals[3])

    console.log(animals[5].name)

    // Tamanho do array
    console.log(animals.length)
}
