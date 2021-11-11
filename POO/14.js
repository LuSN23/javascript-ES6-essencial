//Encapsulamento
//Versão mais antiga:
'use strict';

function Person(initialName) {
    var name = initialName;

    Object.definePropriety(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name: value;
        }
    });
}






/*
- Serve para ocultar detalhes do funcionamento interno
*/ 
