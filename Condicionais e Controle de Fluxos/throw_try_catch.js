
/*
    THROW / Jogar

    Throw é o mesmo que jogar. Ele serve para disparar comandos, mensagens, erros, etc e cancelar ações.

    -   Throw quebra ciclos.

    Sintaxe:

    -   Throw    "O que se deseja..."
*/

function sayMyName(name){
    if(name === ''){
        throw 'Nome é obrigatório.'
    }

    console.log(name)
}

/*
    TRY CATCH / Tentar e Pegar

    Try serve para tentar fazer algo, e o Catch serve pra pegar o que deu errado no Try e tratar o erro.

    Sintaxe:

    -   Try{
            [...]
        } catch (erro) {
            console.log(erro)
        }
*/

try {
    sayMyName()
} catch (erro) {
    console.log("Aplicação interrompida por causa do erro: " + erro) // No caso aqui vai aparecer o
                                                                   // que foi especificado no Throw.
}

sayMyName('Roger')  // Esse funciona normalmente
