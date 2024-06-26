
/*
    Type Conversion e Type Coersion

    Type Conversion ou Conversão de Tipo ocorre quando o próprio desenvolvedor 
    usa algum tipo de conversão explicitamente em um dado para transforma-lo 
    em outro.
    
    Ex:
        console.log(Number("5") + 5)        // Resultado: 10, pois "5" foi con-
                                            vertido em Number

    Type Coersion ou Coersão de Tipo ocorre quando o próprio computador converte 
    um dado em outro tipo de dado

    Ex:
        console.log("5" + 5)                // Resultado: 55, pois como não havia 
                                            nenhuma especificação, o computador 
                                            utilizou o primeiro dado como base para 
                                            converter o segundo, ao perceber que 
                                            eles não eram do mesmo tipo, apenas concatenando 
*/

console.log("5" + 5)
console.log(Number("5") + 5)
