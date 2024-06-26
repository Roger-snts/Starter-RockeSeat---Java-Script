
/*
    Operadores de Comparação 
    
    Serve para comparar valores e retorna um boolean como resposta

    Definem-se por:

    -   ==      => Igual a ...
    -   !=      => Diferente de...
*/

let one = 1
let two = 2

console.log(one == two)     // False
console.log(one == "1")     // True
console.log(two == 2)       // True

console.log(one != two)     // True
console.log(one != 1)       // False
console.log(two != "2")     // False

/*
    Operadores Estritamente Iguais / Diferentes

    Significa que os valores a serem comparados devem ser EXATAMENTE iguais

    Definem-se por:

    -   ===     => Estritamente igual a...
    -   !==     => Estritamente diferente de...
*/

console.log(one === 1)      // True
console.log(one === "1")    // False

console.log(two !== "2")    // True
console.log(two !== 2)      // False

/*
    Operadores de Tamanho

    Estes operadores comparam o tamanho entre os valores selecionados

    Definem-se por:

    -   >       => Maior que...
    -   <       => Menor que...
    -   >=      => Maior ou igual a...
    -   <=      => Menor ou igual a...
*/

console.log(one > two)      // False
console.log(one < two)      // True
console.log(two >= one)     // True     
console.log(two <= one)     // False









