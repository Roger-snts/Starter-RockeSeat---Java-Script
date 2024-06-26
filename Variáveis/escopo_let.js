
/*
    Let só existe em escopo local, sendo assim, só pode ser usado dentro de um bloco

    O código abaixo será executado dentro do computador da seguinte forma:

        console.log("A variável y foi declarada? ", y)
        `` Resposta: Erro``

        {
            let y = 0

            console.log("A variável y foi declarada? ", y)
            `` Resposta: 0 ``
        }
        
        console.log("A variável y foi declarada? ", y)
        `` Resposta: Erro``
*/

console.log("A variável y foi declarada? ", y)

{
    let y = 0

    console.log("A variável y foi declarada? ", y)
}

console.log("A variável y foi declarada? ", y)

/*
    Agora, se definirmos a variável y antes do escopo e tentar acessá-la
    dentro do escopo, declarando outro y antes, o computador irá criar 
    outra variável y, apenas com valor local, ou seja, ambas serão dife-
    rentes, mesmo tendo o mesmo nome:

        let y = 1

        console.log("A variável y foi declarada? ", y)
        `` Resposta: 1 ``

        {
            let y = 0

            console.log("A variável y foi declarada? ", y)
            `` Resposta: 0 ``
        }
        
        console.log("A variável y foi declarada? ", y)
        `` Resposta: 1 ``
*/

{
    let y = 1

    console.log("A variável y foi declarada? ", y)

    {
        let y = 0

        console.log("A variável y foi declarada? ", y)
    }

    console.log("A variável y foi declarada? ", y)
}

/*
    Mas e se não declarar a variável dentro do escopo?

    O que acontecerá é que o computador vai buscar uma variável com o nome 
    solicitado de fora do escopo, e caso exista, vai modificaro valor dela, 
    sendo assim o valor de y será alterado após o escopo:

        let y = 1

        console.log("A variável y foi declarada? ", y)
        `` Resposta: 1 ``

        {
            y = 0

            console.log("A variável y foi declarada? ", y)
            `` Resposta: 0 ``
        }
        
        console.log("A variável y foi declarada? ", y)
        `` Resposta: 0 ``
*/

{
    let y = 1

    console.log("A variável y foi declarada? ", y)

    {
        y = 0

        console.log("A variável y foi declarada? ", y)
    }

    console.log("A variável y foi declarada? ", y)

}
