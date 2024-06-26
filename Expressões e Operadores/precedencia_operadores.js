
/*
    OPERATOR PRECEDENCE

    É a precedência de operadores, ou seja, qual é resolvido primeiro.
    Funciona assim como na matemática.
    
    Precedência:

    -   grouping    ()
    -   negação/incremento  ! ++ --
    -   multiplicação e divisão     * /
    -   adição e subtração      + -
    -   relacional      < <= >= >
    -   igualdade       == != === !==
    -   AND     &&
    -   OR      ||
    -   condicional     ?:
    -   assignment (atribuição)     = += -= *=
*/

console.log((23 + 3) + 2 * 5 / 6 == 3)  // Resultado: Nem eu sei, mas resolve de acordo com a ordem
