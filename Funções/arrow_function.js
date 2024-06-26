
/*
    Arrow Function / Seta de Função

    É uma função normal, porém ao invés de usar a a palavra function para criar, usa-se uma seta:
        - =>

    IMPORTANTE : Não sofre Hoisting
*/

const sayMyName = (nome) => {
    return console.log(`Seu nome é ${nome}.`)
};

sayMyName("Roger")
