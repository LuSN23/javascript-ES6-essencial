//Module:
/*
É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis 
globais.
- Possibilita separar por responsabilidades.
- Já existia antes do ES6, mas foi aprimorada desde então.
*/

//Antigamente era feito assim:
(function($){
    //your plugin here;
})(jQuery);
/*
Criava-se uma if, que é uma função de execução imediata, passava o que ela precisava(jQuery) e 
fazia as alterações(//Your plugin here). 
*/

//Com o ES6 - Exemplo 01:

class Person {
    constructor(name) {        //Declare uma classe, função ou objeto
        this.name = name;
    }
}

export default Person;      //Exporte ela

//Import Person
import Person from './models/person'; //E a importação do que a gente precisar
//Separação dos arquivos de acordo com a responsabilidade(modular)
//*Não é possível usar a implementação import, export no node, apenas no Babel

//Com o ES6 - Exemplo 02 - Parte 1:

let name = 'default';

function getName() {
    return name;
}

function setName(newName){
    name = newName;
}
 
module.exports = { //nova sintaxe usada com import
    getName,
    setName
};
/*
CommonJS = (projeto que estabelecia convenções para módulos fora dos browsers para o JavaScript)
- Usava o require pelo Node.js(JavaScript do servidor) para importar e exportar módulos.
- require é mais antigo e menos poderoso. Usava a sintaxe antiga module.exports.
ES6 = 
- import usa ambos module.exports e exports
- Com o import permite exportar vários pedaços de código como o require fazia, mas uma das vantagens é
que pode importar só partes do que foi exportado.
*/ 