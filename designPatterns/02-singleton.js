//Singleton:

/* 
O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda 
vez em que for necessário utilizá-la. 
- Um padrão muito popular de singleton é o jQuery
*/

var SETTINGS = {            //Pode ser uma variável global, temos SETTINGS em constantes
    api: 'http://localhost',
    trackJsToken: '12345'
}
//Agora com o ES6 module não precisamos ficar utilizando o escopo global, conseguimos portar de acordo

//Exemplo de singleton:
function MyApp() {
    if (!MyApp.instance) {     //Caso a função MyApp não seja definida ela será instanciada, mas caso
        MyApp.instance = this; 
    }
    return MyApp.instance;     //ela já exista é retornada essa instância
}                              //instance é só uma propriedade para controlar se foi instanciado ou não


//Outro exemplo:
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    } 
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Luciana'});
const p2 = Pessoa.call({name: 'Custom Name'}); //Mesmo que alguém tentar explicitar um contexto 
                                               //diferente, sempre retornará a mesma instância que
                                               //eu primeiro instanciei.
console.log(p);       //{ name: 'Luciana' }

console.log(p2);      //{ name: 'Luciana' }
