//Static (a palavra):

//Maneira mais antiga (com function e sem classe):
'use strict';

function Person() {}

Person.walk = function() {     //Como Person é function e functions são objects, posso definir um método para Person, 
    console.log('walking...'); //nesse caso walk().
}

console.log(Person.walk()); //"walking..." //Chamando walk() sem instanciar um novo objeto Person

//Maneira mais nova (usando classe):
'use strict '
class Person {
    static walk(){
        console.log('walking...');
    }
}

console.log(Person.walk()); //"walking..."

/*
- A palavra chave static define um método estático ou propriedade de uma classe(nem métodos nem 
propriedades estáticas podem ser chamadas em instâncias da classe, eles são chamados na classe 
em si mesma).
- Métodos estáticos são muitas das vezes funções de utilidade, como funções para criar ou clonar 
objetos, enquanto propriedades estáticas são úteis para caches, configuração corrigidas, ou qualquer 
outro dado que você não precise replicar pelas instâncias. 
- Permite acessar métodos/atributos sem instanciar uma determinada classe 
*/