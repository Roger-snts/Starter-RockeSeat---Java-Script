
/*
    FOR OF / PARA CADA ... EM

    For Of é um laço de repetição do mesmo tipo que o "For", porém, ele percorre cada letra de 
    uma string ou cada palavra de um array e executa o laço com base nela.

    -   Usado em Strins e Arrays

    Sintaxe:

    -   for(let letra of "Muzan"){
            console.log(letra)      //  Retorna "M", "u", "z", "a", "n", uma em cada ciclo
        }

    -   for(let palavra of ["Zenitsu", "Tanjiro", "Inosuke"]){
            console.log(palavra)    // Retorna "Zenitsu", "Tanjiro", "Inosuke", uma em cada ciclo
        }
*/

const unique_name  = "Nezuko";
let names = ["Zenitsu", "Tanjiro", "Inosuke"];

for(let letter of unique_name){
    console.log(letter)
}

for(let name of names){
    console.log(name)
}
