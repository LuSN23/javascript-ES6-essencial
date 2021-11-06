//Comparação herança por PROTOTYPE vs CLASS:
//PROTOTYPE:
'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug); //Cachorro { qtdePatas: 4, morde: false }

//CLASS:
'use strict';
class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4); //super é usado para acessar o objeto pai de um objeto, ou a classe pai de uma classe
        this.morde = false;
    }
}
const pug = new Cachorro(false);

console.log(pug); //Cachorro { qtdePatas: 4, morde: false }

/*
- Como com prototypes era complicado criar métodos e propriedades dentro deles foi criado uma 
nova forma de fazer isso(herança). 
//CLASSES:
- Com o ES6 foi criado herança por Classes para o JavaScript.
- Simplificação da herança de protótipos.
- Palavra chave class
- Facilita para pessoas que vem de Java ou outras linguagens back-end.
*/