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

//EXEMPLO 03: Ajustado:
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

/*
//Ajustando this dentro de uma closure
- Closures não podem acessar função externa usando 'this' porque essa variável é 
acessível somente pela própria função e não para funções internas.
- Como uma função interna não pode acessar o 'this' de uma função externa, o this
dentro da função anônima refere-se ao objeto global window(quando o strict mode não
tá ligado). (No exemplo abaixo).
*/
//EXEMPLO 04: Original:
var user = {
    tournament: "The Masters",
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    clickHandler: function(){
        //O uso de this.data aqui está certo, já que "this" se refere ao objeto 
        //"user" e "data" é uma propriedade desse objeto.
        this.data.forEach(function(person){
            //Mas aqui, dentro da função anônima, "this" não mais se refere ao 
            //objeto "user";
            //essa função interna não pode acessar o "this" da função externa.
            console.log('A o que "this" se refere?'+ this); //[object Window]

            console.log(person.name + ' está jogando no '+ this.tournament);
            // "T. Woods está jogando no undefined​"
            // "P. Mickelson está jogando no undefined​"
        });
    }
}
//A o que "this" se refere? [object Window]
user.clickHandler();

//EXEMPLO 04: Ajustado:
/*- Uma prática comum é atribuir o valor de 'this' a uma variável antes de entrar em 
forEach:*/
var user = {
    tournament: "The Masters",
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    clickHandler: function(event){
        var theUserObj = this;

        this.data.forEach(function (person){
            console.log(person.name + ' está jogando no '+ theUserObj.tournament);
        });
    }
}
user.clickHandler();
//"T. Woods está jogando no The Masters​"
//"P. Mickelson está jogando no The Masters"

/*
- É comum usar that como o nome da variável para armazenar esse contexto de this
var that = this;
*/

/*
//Ajustando this quando método é atribuido a uma variável
- Quando se atribui um método que usa 'this' a uma variável, o valor the 'this' 
ele se perde e acaba pegando o valor da variável global nesse caso:
*/
//EXEMPLO 05: Original:
//"data" é uma variável global
var data = [
    {name: "Samanta", age: 12},
    {name: "Alexis", age: 14}
];

var user = {
    //Esse "data" é propriedade do objeto "user"
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    showData: function(event) {
        //Número aleatório entre 0 e 1
        var randomNum = ( ( Math.random() * 2 | 0 ) + 1) - 1;

        //Adiciona uma pessoa aleatória do array "data" ao texto
        console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age);
    }
}
var showUserData = user.showData;
//Quando a função "showUserData" é executada, os valores mostrados são da global 
//"data", não a do array em "user".
showUserData(); //"Samanta 12"

//EXEMPLO 05: Ajustado:
//- Usando o bind para definir especificamente o valor de 'this'.
var showUserData = user.showData.bind(user);

showUserData();

/*
//Ajustando this em "métodos emprestados"
- this do método avg se refere ao objeto appController porque é chamado por ele e 
não por gameController. 
*/
//EXEMPLO 06: Original:
//Nós temos 2 objetos, um deles tem um método chamado avg() que o outro não tem
//Então vamos emprestar o método avg()
var gameController = {
    scores: [ 20, 34, 55, 46, 77 ],
    avgScore: null,
    players: [
        {name: "Tommy", playerID: 987, age: 23},
        {name: "Paul", playerID: 87, age: 33}
    ]
};

var appController = {
    scores:   [ 900, 845, 809, 950 ],
    avgScore: null,
    avg :     function() {
        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
        return prev + cur;
    } );

        this.avgScore = sumOfScores / this.scores.length;
    }
};
//Se o código abaixo for executado, a propriedade "gameController.avgScore" terá a 
//média da pontuação do array "scores" em "appController".

//Este código é somente para ilustrar a situação; a intenção é que 
//"appController.avgScore" continue "null".
gameController.avgScore = appController.avg();

//EXEMPLO 06: Ajustado:
/*
- O objeto gameController toma emprestado o método avg() de appController.
- this dentro do método appController.avg() será de gameController porque o primeiro 
parâmetro de apply() sempre define o valor de this explicitamente.
*/
//Está se usando o método apply(), então o segundo argumento tem que ser um array
appController.avg.apply(gameController, gameController.scores);

//A propriedade "avgScore" foi atribuida no objeto "gameController", mesmo com o 
//método emprestado <code>avg()</code> do objeto <code>appController</code>. 
//console.log( gameController.avgScore ); // 46.4​ 
// appController.avgScore ainda é "null"; 
// somente "gameController.avgScore" foi atualizado 
// console.log( appController.avgScore ); // null
