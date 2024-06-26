
/*

    Prototype

    Também chamado de protótipo ou apenas proto, é a capacidade de uma variável, 
    seja lá qual for o tipo, number, char, array, object, etc, poder acessar as 
    propriedades de um objeto pai já predefinido ao ser criada.

    No JavaScript a maioria das variáveis herdam de um objeto pai ao serem criadas 
    e com isso também recebem as mesmas funções que ele tem.

    Para acessar esse objeto, basta escrever a variável e acessar o atributo __proto__

    Ex:
        true.__proto__
        "way".__proto__
        ["Stack", "Over", "Flow"].__proto__
        {}.__proto__
        23.1.__proto__                  // Para variáveis do tipo Number, é neces-
        sário adicionar mais um ponto após o número flutuante  

    
    Portanto, essa é a mesma propriedade que permite descobrir a largura de uma 
    variável, diminuir ou aumentar a fonte de letras, buscar por algo em um array, etc
*/

["Abc", "DEF"].length()
"Abc".__proto__
10.0.__proto__
