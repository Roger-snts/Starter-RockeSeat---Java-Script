
/*
    IF e ELSE

    If serve para perguntar ao computador "SE" algo acontece.

    Else serve para dizer ao computador o que fazer "SE" algo "NÃO" aconteceu

    If e Else / Se ... e Senão ...

    É como uma ordem.

    "Se algo aconteceu, faça isso. Senão, faça isso."

    Com base nisso cria-se o controle do fluxo da aplicação, podendo determinar o que ela executa 
    e/ou quando ela executa algum código.
*/

// DICA:    Sempre utilize variáveis para armazenar o resultado das comparações e passe elas 
// como parâmetro, ao invés de passar a comparação.

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log( "Febre alta" )
} else if(mediumTemperature) {
    console.log( "Febre moderada" )
} else {
    console.log( "Saudável" )
}

