
/*
    SWITCH CASE

    Switch funciona da mesma maneira que o IF ELSE, porém, trata por vez apenas uma variável 
    ou condição específica.

    Sintaxe:
    
    switch(condição){
        case "resultado tal...": 
            console.log(resultado tal)
            break;
        case "resultado outro...":
            console.log(resultado outro)
            break;
        default:
            console.log(resultado não previsto)
            break;
    }

    O Switch case pode ser usado quando se prevê vários resultados para uma mesma condição, 
    alternando entre os 'case' de forma que cada um deles seja percorrido e comparado ao resultado.
    Se o resultado não for o mesmo que o case, ele pula para o próximo case e compara.
    Se nenhum dos cases forem compatíveis com o resultado, ele executa o que está em 'default'.
*/

function calculate(number_1, operator, number_2){
    let result = 0;

    switch (operator) {
        case '+':
            console.log(result = number_1 + number_2)
            break;

        case '-':
            console.log(result = number_1 - number_2)
            break;
        
        case '*':
            console.log(result = number_1 * number_2)
            break;

        case '/':
            console.log(result = number_1 / number_2)
            break;

        default:
            console.log("Operador não listado.")
            break;
    }

    return result;
}

calculate(5, '+', 10);

