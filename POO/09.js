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

/*
//Ajustando this quando usado em um método callback:
CALLBACK: Uma rotina(execução de uma tarefa específica) que é passada como parâmetro 
para outro método.
- No código abaixo, o objeto que invoca(durante o evento) clickHandler() é o 'button' 
e então o seu contexto(o this) não mais refere-se ao objeto 'user'.
- Chama-se o user.clickHandler() já que clickHandler é um método definido no 'user'.
- O contexto muda quando se executa um método em algum outro objeto do qual o objeto 
foi originalmente definido, e passa a ser o objeto que invoca o método.*/
//EXEMPLO 03: Original:
//Tem-se um objeto simples com o método "clickHandler" para ser usado quando um 
//botão na página é clicado.
var user = {
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    clickHandler: function(event){
        // Número aleatório entre 0 e 1
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;

        // Mostra um nome e idade aleatórios do array "data"
        console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age);
    }
}
//O botão é envolvido por um wrapper de jQuery ($), então ele agora é um objeto 
//jQuery a saída será "undefined" porque não há propriedade em "data" no objeto-botão.
$('button').on('click', user.clickHandler); //"Cannot read property '0' of undefined"

//EXEMPLO 03: AJUSTADO:
/*
Para resolver isso:
- Como se quer que this.data faça referência a propriedade de dados de user é 
possível usar os métodos bind(), apply() e call() para definir especificamente o 
valor de this.
*/
//Ao invés de usar:
$('button').on('click', user.clickHandler);
//Deve-se usar:
$('button').on('click', user.clickHandler.bind(user)); //P.Mickelson 43