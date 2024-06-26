
// Pode-se declarar funções dentro de variáveis
// Isso é uma Função Anônima / Function Expression

const sum = function(number1, number2){
    console.log(number1 + number2)
};


// Number1 e Number2 são Parâmetros / Parameters
// Aqui os números que os substituem são os Argumentos / Arguments da função

sum(4, 6)

// Mas pra passar dentro de uma interpolação, é necessário que a função retorne algo

const word = function(){
    return "A PALAVRA"          // Return especifica o que uma função irá retornar, ou seja, o valor
};

console.log(`A função word retorna ${word()}`) // Agora isso funciona, por causa da palavra "return"

/* PONTO INTERESSANTE mas NUNCA faça isso */

// Ao criar uma variável sem passar o seu declarador, dentro de uma função, ela passa a existir tanto dentro quanto fora da mesma

const sumWithVar = function(number1, number2){
    total = number1 + number2   // sempre use um let.
    return total
};

console.log(`A soma de 4 + 5 é ${sumWithVar(4, 5)}`)

console.log(total)          // Dessa forma, é possível ter o valor do Total mesmo fora da 
                            // função após invocá-la ao menos uma vez

/*
    As funções declaradas com function e atribuídas algum nome, sofrem hoisting e podem ser
    chamadas antes mesmo de sua declaração
*/

sayMyName()

function sayMyName(){
    return console.log('Roger')
};

/*
    Entretanto, funções declaradas anônimamente não sofrem Hoisting, e causam um erro
    Isso *independe* se a função foi declarada como 
        - var
        - let
        - ou const
*/
sayMyLastName()     // ocorre um erro

const sayMyLastName = function(){
    return console.log('Santos')
}
