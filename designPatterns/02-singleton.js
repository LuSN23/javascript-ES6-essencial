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
}
