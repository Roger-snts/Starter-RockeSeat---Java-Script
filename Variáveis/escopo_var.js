
/*
    O var é global, então quando declarado mesmo dentro de qualquer escopo, o
    programa entende que deve ser elevada, declarada, mas não definida ou atri-
    buída algum valor a ela.

    O que acontece então no código abaixo, dentro do computador, é:

        var x;

        console.log("A variável x existe? ", x)
        `` Resposta: Undefined ``

        {
            x = 0;
        }

        console.log("A variável x existe? ", x)
        `` Resposta: 0 ``
*/

console.log("A variável x existe? ", x)

{
    var x = 0;
}

console.log("A variável x existe? ", x)
