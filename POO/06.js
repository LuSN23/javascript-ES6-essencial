'use strict';

function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal); //true

console.log(cachorro instanceof Function); //false

/*
Usando instanceof posso verificar se um objeto é instância de uma determinada função, 
e por causa disso baseada em qual prototype
*/