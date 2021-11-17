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

