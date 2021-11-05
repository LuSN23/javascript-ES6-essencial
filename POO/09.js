/*
this: (Situações mais complicadas e que geram erros de compreensão)
- Alguns exemplos: 
* Quando uma função que usa this é passada como uma função de callback;
* Quando this é usado dentro de uma closure(uma função interna); 
* Quando se atribui um método que usa this para uma variável;
* "Métodos emprestados"; 

//Mudando o contexto:
CONTEXTO: Semelhante ao assunto de uma frase, assim como é possível mudar o assunto 
da frase usando ponto-e-vírgula, um objeto que é o contexto atual pode mudar-se o 
contexto para outro objeto, invocando a função com outro objeto.*/
//EXEMPLO 02:
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function() {
        //O "contexto"
        console.log(this.firstName +' '+ this.lastName);
    }
} 

// O "contexto", quando invoca "showFullName", é o objeto "person", quando se 
//invoca o método. 
// "showFullName" no objeto "person" e o uso de "this" dentro do método 
//"showFullName" tem o valor do objeto "person".
person.showFullName(); //Penelope Barrymore

// Se se invoca "showFullName" em um objeto diferente:
var anotherPerson = {
    firstName: "Rohit",
    lastName: "Khan"
};
// É possível usar o método "apply" para estabelecer o valor de "this" mais 
//explicitamente.
// "this" pega o valor de qualquer objeto que invoca "this", então:
person.showFullName.apply(anotherPerson); //Rohit Khan

//Então, o contexto é agora "anotherPerson" porque "anotherPerson" invocou 
//person.showFullName() ao usar apply().