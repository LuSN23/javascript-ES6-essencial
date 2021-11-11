//Encapsulamento
//Versão mais antiga (não usando classe):
'use strict';

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },                          //Aqui as definições dos métodos get e set
        set: function(value) {
            name: value;
        }
    });
}
/*defineProperty() é um método estático que define uma nova propriedade diretamente em um objeto, ou 
modifica uma propriedade existente e retorna o objeto. (Você invoca esse método diretamente no constructor
do Object ao invés de invocar em uma instância do tipo Object)
this = onde é definido o objeto no qual será definida a propriedade
'name' = onde o nome da propriedade que será definida ou modificada
*/

//Versão mais nova: (usando classe):
'use strict';

class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() {            
        return this.#name;
    }

    set name() {
        this.#name = name;
    }
}

/*
Em versões com suporte a classe:
- Conseguimos agora ter as palavras get e set para determinado atributo.
- Agora quando eu faço const p = new Person; eu consigo dar um p.name e p.name = 'Thiago', executando 
esses métodos que estão dentro do constructor direto.
*/


/*
- Serve para ocultar detalhes do funcionamento interno
*/ 
