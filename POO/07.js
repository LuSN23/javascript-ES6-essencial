'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);  //Como é uma função no escopo global, é preciso usar 
   //algo como call para trazer o contexto de Animal(que é outra função no escopo 
   //global) para dentro dessa função Cachorro.

    this.morde = morde;
}

//Daí só falta passar como parâmetro false ou true para morde, que é o parâmetro que sobrou
const pug = new Cachorro(false); //instânciando um novo cachorro 
//false significa que o pug não morde

console.log(pug); //Cachorro {qtdePatas: 4, morde: false}

/* Esse exemplo é como se fosse uma herança porque Cachorro herda características de
Animal e pug de Cachorro incorpora contexto e nova característica */

