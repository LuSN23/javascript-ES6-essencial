function getName() {
    return 'Luciana Sarai Nunes';
}

function logFn(fn) { //(função de ordem maior/superior)
    console.log(fn()); //Retornando a função fn()/getName() (primeira-classe)
}

const logFnResult = logFn; //Atribuição da função logFn como variável(primeira-classe)

logFnResult(getName); //Passando a função getName como argumento/parâmetro á função LogFnResult(primeira-classe e ordem maior)

//Atribuido uma função às estruturas de dados object e array
const obj = {
    logFn: logFn
}

const arr = [logFn];

/*Função de primeira classe e de ordem maior:
A função pode ser atribuida a uma variavel, 
atribuida a uma estrutura de dados(object e array), 
passada por argumentos e retornar outras funções*/
/*Função de ordem maior, função superior: Função que tem outra função como argumento 
ou produz uma função como resultado(retorna)*/
/*Função de primeira classe/first-class: Quando sua função é tratada como qualquer outra variável, 
pode ser usada como argumento, retornada, atribuida como valor de uma variável, funções podem ser 
tratadas como valores que podem ser passados, manipulados, retornados(é possível operar funções).*/
/*Diferença entre funções de primeira classe x funções de ordem maior: 
PRIMEIRA-CLASSE: o conceito é um atributo da linguagem(ela tem ou não)
ORDEM MAIOR: o conceito é um atributo da função(ela tem ou não)*/