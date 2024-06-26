
/*
    FALSY

    Falsy é o mesmo que determinar que o resultado de uma comparação lógica é falso.

    Os tipos que retornam falso, independente da comparação, desde que estejam sozinhos são:

    -   false
    -   0
    -   -0
    -   null
    -   NaN
    -   undefined
    -   ""
*/

console.log( 0 ? "verdadeiro" : "falso" )   // Resultado: "Falso", porque 0 está na lista acima

/*
    TRUTHY

    Truthy da mesma forma que o Falsy serve para determinar se uma comparação lógica é verdadeira.

    Os tipos que retornam verdadeiro, independente da comparação, desde que estejam sozinhos são:

    -   true
    -   {}
    -   []
    -   1
    -   3.23
    -   "0"
    -   "false"
    -   -1
    -   Infinity
    -   -Infinity
*/

console.log( "false" ? "verdadeiro" : "falso" )     // Resultado: "Verdadeiro"

// Por que isso acontece? KKKKK é porque o computador converte o valor passado em true ou false, de acordo com as listas acima citadas.
