//Modificadores de Acesso:
//Maneira mais antiga: (sem uso de classe)
'use strict';

function Person(initialName) {
    let name = initialName; //Esse let só existe nesse contexto, não é visível para fora(privado/não exposto diretamente com new Person)
                            //Por isso é necessário definir funções como as de baixo para acessar essa variável

    this.getName = function() { //get para recuperar um dado ("getters and setters")
        return name; //Retorna a variável para fora
    }

    this.setName = function(newName) { //set para configurar um dado ("getters and setters")
        name = newName; //Define name com o atributo de entrada newName de fora
    }
}

const p = new Person('Luciana'); 

console.log(p); 
/* 
    Person {                              //Acessando a constante p inteira vai esconder o que tem dentro das functions
        getName: [Function (anonymous)], 
        setName: [Function (anonymous)]
    } 
*/

p.getName(); //Recupera o name com a função feita para retornar name
//"Luciana"
p.name;      //Não mostra nada porque tenta acessar diretamente a variável name que só existe com let dentro do escopo da function Person
//undefined
p.setName('Thiago'); //Seta um novo nome para p
p.getName();         //Recupera o novo nome de p
//"Thiago"

/*
- O JavaScript não tem modificadores de Acesso, até então.
- Ainda não há suporte nos browsers.
- Trata-se de um controle do que é privado e do que é público dentro da minha classe
- Temos que obrigatoriamente implementar para permitir que de fora alguém altere esse valor(get e set)
*/

//Maneira mais atual/talvez ainda não tenha suporte: (com uso de classe):
'use strict';

class Person {
    #name = ''; //Método novo para definir uma variável como privada, usando #

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
} 
console.log(p);
//Person{}

p.getName();
//"Luciana"

p.name;
// undefined

p.setName('Thiago');
p.getName();
//"Thiago"
// # é o Modificador de Acesso do JavaScript