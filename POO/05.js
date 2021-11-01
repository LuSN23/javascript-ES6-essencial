'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal;

console.log(cachorro.__proto__ === Animal.prototype); //true

console.log(Animal.__proto__ === Function.prototype); //true Function é função construtora de Animal
/*
Função construtora e suas instâncias:
Animal -> cachorro
Function -> Animal
ou
Function -> Animal -> cachorro
*/