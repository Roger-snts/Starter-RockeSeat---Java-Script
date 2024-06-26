
/*
    Através da manipulação de dados é possível transformar um tipo de dado em outro
*/

let string = "1234"
console.log(Number(string))

let number = 4321
console.log(String(number))


/*
    Contar caracteres
*/

let word = "amaiorpalavradomundo"
number = 45321

console.log(word.length)
console.log(String(number).length)

/*
    Transformando um número quebrado/flutuante em um número com 2 casas decimais

    A partir da função "toFixed(Nº de casas desejáveis)"

    E trocando o ponto "." por vírgula ","
*/

number = 12.3048304

console.log(number.toFixed(2).replace(".", ","))

/*
    Alterando o tamanho da fonte das palavras
*/

let phrase = "Programar é muito bom!"

console.log(phrase.toUpperCase().toLowerCase())

/*
    Verificando se a frase contém alguma palavra.

    (o método é case sensitive)
*/

console.log(phrase.includes("Bom"))     // Retorno: false, porque o "bom" na frase começa com "b"

/*
    Separando textos em um array com split(Caracter a ser retirado)

    Unindo com join(Caracter desejado entre as uniões)
*/

let phraseArray = phrase.split(" ")
let phraseWithUnderline = phraseArray.join("_")

/*
    Criando array com o construtor Array()
*/

let arrayWithConstructor = new Array("a", "2", "#")

console.log(arrayWithConstructor)

/*
    Contar elementos de um array
*/

console.log(["a", "b", "c"].length)

/*
    Transformando uma cadeia de caracteres em um Array com o método Array.from(Cadeia de Char)

    Consiste em dividir a palavra e transformar cada letra em um elemento do Array

    Ex:
        Array.from("ovo")           // Retorno: ["o", "v", "o"]
*/

let wordChar = "especialidade"

console.log(Array.from(wordChar))
