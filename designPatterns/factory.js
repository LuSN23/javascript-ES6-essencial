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