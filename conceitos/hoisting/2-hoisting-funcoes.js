//Hoisting de funções
function fn() {
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}
fn();

//O que está acontecendo
/* function fn() {
     function log(value) {
        console.log(value);
    }
    log('Hoisting de função');
}
*/

/* Se usarmos isso num projeto real, vamos configurar um linter para 
não permitir que chamemos uma função antes de criar ela. Porque pensando 
num código extenso, que tenha umas 100 linhas, fica difícil achar a declaração 
de função nele */
//Boa prática: Declarar funções antes(acima no código) de chamá-las
//A função é içada por completo