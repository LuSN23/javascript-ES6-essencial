//Herança escrevendo no prototype vs Class
//PROTOTYPE:
'use strict';

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

//CLASS:
'use strict';

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {} //Adicionando um método novo
}

class Cachorro extends Animal {
    constructor(morde){
        super(); //Sempre antes de this
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);