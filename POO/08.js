/* 
this: (O básico) 
- É usado normalmente para se referir a um objeto como se fosse um pronome 
de uma linguagem regular, como 'ele', 'ela'. person.firstName vira this.firstName, 
isso evita ambiguidade de citar uma possível variável global existente no código e o 
this referência um objeto específico e evita de fazer referência à variável global 
não causando erros.
- É usado como um atalho, um referente como um sujeito no contexto ou o sujeito do 
código em execução. 
- Existe para fins de precisão de referência e não como algo simplesmente estético.
- Assim como ele refere-se a um antecedente this refere-se a um objeto a que a 
função que usa o this, está vinculada. 
- Toda função em JavaScript tem propriedades, assim como objetos as tem, e quando 
ela é executada obtem a propriedade this(uma variável com o valor do objeto que 
invoca a função na qual this é usado).
- Normalmente usado dentro de uma função ou método, mas pode estar também no escopo 
global fora de função.
[Em strict mode: this mantém o valor undefined em funções globais e em funções 
anônimas que não estão vinculadas a nenhum objeto]
- Quando usado dentro de uma função, ele possibilita acessar métodos e propriedades 
do objeto que invoca a função.
ATENÇÃO: não é atribuido um valor a this até que um objeto invoque a função na qual 
this é definido.(Considere sempre uma função que é invocada para que o this tenha o 
valor do objeto que invoca a função). 
Existem alguns casos em que this não tem o valor do objeto sendo invocado(mas 
normalmente tem).
*/
//EXEMPLO 01:
var firstName = 'Peter';
var lastName = 'Ally';

function showFullName(){
    //"this" dentro dessa função terá o valor do objeto "window" porque a função 
    //"showFullName" é definida no escopo global, assim como "firstName" and 
    //"lastName​".
    console.log(this.firstName + ''+this.lastName);
}

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function() {
        //"this" se refere ao objeto "person", já que a função "showFullName" será 
        //invocada pelo objeto "person".
        console.log(this.firstName + '' + this.lastName);
    }
}
showFullName(); //Peter Ally
//"window" é o objeto em que todas as variáveis globais e funções são definidas, 
//portanto:
window.showFullName(); //Peter Ally
//window deve ser usado no navegador apenas

//"this" dentro do método "showFullName", que é definido dentro do objeto "person", 
//ainda se refere ao objeto "person", então:
person.showFullName(); //Penelope Barrymore