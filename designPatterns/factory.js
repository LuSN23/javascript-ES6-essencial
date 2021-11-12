//Factory:

//Isto não é uma factory
function FakeUser(){
    this.name = 'Luciana';
    this.lastName = 'Sarai Nunes';
}
const user = new FakeUser();


//Isto é uma factory:
function FakeUser() {
    return {
        name: 'Luciana',
        lastName: 'Sarai Nunes'
    }
}

const user = FakeUser();

/*
Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas 
funções Factory(fábrica).
*/

//Outros exemplos:
//01:
function Pessoa() {
    return {
        name: 'Luciana',
        lastName: 'Sarai Nunes'
    }
}

const p = Pessoa();
console.log(p);

//02
function Pessoa(name){
    return {
        name,
        lastName: 'Sarai Nunes'
    }
}

const p = Pessoa('Custom Name');
console.log(p);
//Factories não se definem apenas com propriedades estáticas, podemos definir atributos para ela
//Nesse caso name, que é preenchido no exemplo com 'Custom Name'

//03
function Pessoa(customProperties){
    return {
        name: 'Luciana', //Pode ser deixado um valor padrão para o name
        lastName: 'Sarai Nunes',
        ...customProperties //Usando o spread operator para incluir todas as outras propriedades que 
                            //quiser adicionar do jeito que elas vierem mesmo
    }
}

const p = Pessoa({name:'Custom name', age: 27}); //Sobreescrevendo name e adicionando nova propriedade 
                                                 //age. ATENÇÃO não esquecer {} envolta das propriedades 
                                                 //em Pessoa().
console.log(p);  //{ name: 'Custom name', lastName: 'Sarai Nunes', age: 27 }                    
                    