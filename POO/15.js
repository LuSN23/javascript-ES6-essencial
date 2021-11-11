//Static (a palavra):

//Maneira mais antiga (com function e sem classe):
'use strict';

function Person() {}

Person.walk = function() {     //Como Person é function e functions são objects, posso definir um método para Person, 
    console.log('walking...'); //nesse caso walk().
}

console.log(Person.walk()); //"walking..." //Chamando walk() sem instanciar um novo objeto Person
/*
Permite acessar métodos/atributos sem instanciar uma determinada classe 
*/