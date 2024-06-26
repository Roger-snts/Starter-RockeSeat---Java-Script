
/*
    Const assim como Let só existe em escopo local, sendo assim, só pode ser 
    usado dentro de um bloco

    O código abaixo será executado dentro do computador da seguinte forma:

        const z = 1

        console.log("A constante z foi declarada? ", z)
        `` Resposta: 1 ``

        {
            const z = 0

            console.log("A constante z foi declarada? ", z)
            `` Resposta: 0 ``
        }
        
        console.log("A constante z foi declarada? ", z)
        `` Resposta: 1 ``
*/

const z = 1

console.log("A constante z foi declarada? ", z)

{
    const z = 0

    console.log("A constante z foi declarada? ", z)
}

console.log("A constante z foi declarada? ", z)
