
/*
    Operadores Lógicos

    Servem para definir se uma condição é verdadeira ou falsa através de 
    uma comparação em ambos os valores

    Definem-se por:

    -   AND : &&        => Ambos os valores devem ser verdadeiros para prosseguir
    -   OR  : ||        => Apenas um dos valores precisa ser verdadeiro
    -   NOT : !         => Inverte o valor da variável. True vira False, e vice-versa
*/

let pao = true
let queijo = true

// Eu só posso comer se tiver pão e queijo:
console.log(pao && queijo)      // Retorna: True, então eu posso comer

// Eu posso comer se tiver pão OU queijo:
queijo = false
console.log(pao || queijo)      // Retorna: True, pois tem o pão

// Não quero que tenha queijo
queijo = true
console.log(!queijo)            // Retorna: False, pois negou o queijo
