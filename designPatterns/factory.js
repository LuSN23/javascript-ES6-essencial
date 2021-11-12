//Factory:

//Isso não é uma factory
function FakeUser(){
    this.name = 'Luciana';
    this.lastName = 'Sarai Nunes';
}
const user = new FakeUser();




/*
Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas 
funções Factory(fábrica).
*/