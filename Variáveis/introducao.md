
# Variáveis

* São partes do código que servem para salvar algum dado especifico
* Nomes simbólicos
* Atalhos no código
* Identificadores

Para criar uma variável são reservadas 3 palavras especiais

* var   - É *global* e *local* ao mesmo tempo
* let   - O valor será declarado mais a frente no código e será apenas *local*
* const - O valor se torna constante, não podendo ser alterado ao menos que a variável
        seja sobreescrita

Além disso, o JavaScript é uma línguagem fracamente tipada e dinâmica

- Variáveis podem mudar o tipo delas de acordo com o valor que recebem
- Variáveis não precisam de tipo ao serem declaradas

# Scope

Determina a visibilidade de uma variável no JS.
Trabalha a partir de um Statement / Declaração de bloco

## Block Statement

```js
    // Vamos iniciar um bloco

    {
        // Isso é um bloco, uma área que inicia 
        
        //E fecha com chaves
    }
```

Ao criar um bloco, também será criado um escopo para ele. Isso é chamado
de `block-scoped`. O block-scoped é uma caixa fechada onde contém um có-
digo e variáveis.

### Hoisting

É o ato do computador elevar variáveis declaradas como *var* para o iní-
cio do programa, tornando-a undefined antes de chegar à linha em que a 
ela será atribuída algum valor.
