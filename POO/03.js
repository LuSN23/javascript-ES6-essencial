'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
//4

/*
- A função construtora Animal tem um atributo qtdePatas que é 
herdado pela sua instância a constante cachorro. 
- new em new Animal() significa que esta-se a instanciar um objeto a partir da 
função construtora Animal
- cachorro.qtdePatas está acessando o atributo qtdePatas dentro da const cachorro, 
atributo herdado de Animal 
- this se refere ao contexto
*/