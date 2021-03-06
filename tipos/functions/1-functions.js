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

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam); //Funções de primeira classe e ordem maior

logFnResult(fn);
//Usado bastante em bibliotecas, React quando é preciso fazer algo antes de executar alguma regra

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution();     //Não executará a função fn

//Conseguimos compor/encadear esse permissionamento

//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}