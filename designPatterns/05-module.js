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

//Com o ES6:
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
