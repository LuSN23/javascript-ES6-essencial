//Continuação do Exemplo 02 de Module com o ES6:
//Arquivo para importar o exemplo 02 de '05-module.js'
//Usando a sintaxe de require do CommonJS
const {getName, setName} = require('./05-module'); //De onde vai ser importado

console.log(getName());
console.log(setName('|'));
console.log(getName());

/*
default
undefined
Luciana
*/

/*
- Essa separação em módulos é bem interessante para por exemplo quando formos criar a camada de serviço 
que faz requisições AJAX(Asynchronous JavaScript and XML) e vai reaproveitar isso em outras partes do 
nosso código.
Requisição AJAX = Uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor.
(Fazer requisições  para o servidor sem recarregar a página, receber e trabalhar com dados do servidor).
*/