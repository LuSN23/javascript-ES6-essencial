var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        var test = 'exemplo';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();


/* O que está acontecendo:

var test = 'example';

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`);
    if(true) {
        test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})();
*/ 

/*
Observar o valor de var test em:
1 - Na primeira linha da função
2 - Dentro do if
3 - E por último após o bloco if dentro da função 
*/
//No 3 ele já sabe para onde apontar o valor
/*O var não aceita escopo de bloco(ele não entende), apenas escopo de função ou 
global, por isso acontece hoisting com a declaração da var dentro do bloco if*/
/*Por causa do closure dentro da função ele vai lembrar o escopo léxico em que a 
variável test(global) foi criada*/
/* Essa sintaxe da função é de uma função de execução imediata:
O mesmo que isso:
 function teste() {

}()
Esse último parênteses é a chamada da função */
//Nesse exemplo temos um if de arrow function