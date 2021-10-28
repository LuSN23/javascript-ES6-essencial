'use strict';

function Animal() {}

console.log(Animal.constructor);  //A função construtora é o Function
//[Function: Function]

/*
Cadeia de protótipos:
Herança baseada em protótipos: 
O resultado acima se dá porque:
Animal.constructor -> Function - 
Function.prototype.constructor -> 
Object -> Object.prototype = null;
(A declaração da função Animal, o constructor dela aponta para 
a função construtora Function, daí o prototype dele aponta para 
a função construtora dela aponta para a função construtora Object, 
já que funções são objetos, e essa função construtora Object não 
tem nada em sei prototype porque é a estrutura raiz do JavaScript.)
*/