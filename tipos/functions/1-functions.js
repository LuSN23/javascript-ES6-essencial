//Função
function fn() {
    return 'Code here';
}

//Arrow function
const arrowFn = () => 'Code here'; //return implicito
const arrowFn2 = () => {
    //No caso de mais de uma expressão é exigido o return explícito
    //Mais de uma expressão
    return 'Code here';
}

//Funções são objetos que permitem serem chamados
//Funções também são objetos, então é possível adicionar propriedades à elas
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop);


