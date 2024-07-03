
/*
    WHILE / Enquanto

    While significa Enquanto, e funciona da seguinte forma: Enquanto a condição passada para ele 
    for true / verdadeira, o corpo dele / código dentro dele será executado. Quando ela for 
    false / falsa, a condição se rompe.

    -   Assim como as outras estruturas de repetições, é possível romper antecipadamente com "break"

    Sintaxe:

    -   while(condição for true){
            executa os códigos aqui dentro...
        }
*/

let i = 0;

while(i < 10){
    console.log(i)
    i++;
}

console.log("Condição terminou.")

