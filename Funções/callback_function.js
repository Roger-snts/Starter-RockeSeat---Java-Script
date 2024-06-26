
/*
    Callback Function / Função de chamada

    É uma função que recebe como parâmetro outra função
    Ao passar um atributo para funções em JS, ela pode receber qualquer valor, até mesmo uma função
*/

const sayMyName = function (funcao) {
    console.log('Antes de executar a função de callback')

    funcao()

    console.log('Depois de executar a função de callback')
};

sayMyName(() => {
    console.log('Meu nome é Roger e estou em um Callback')
})
