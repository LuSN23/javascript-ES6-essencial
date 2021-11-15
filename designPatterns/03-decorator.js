//Decorator:

/*
Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem 
modificá-la explicitamente.
- Está como uma proposta no tc39
- Mas caso quiser usar decorator por agora, dá para usar com TypeScript usando um @ na frente
*/

let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn(); //Retorne se loggedIn for true e o valor da fn()
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2,3))); //Controle com callIfAuthenticated, só executa a 
                                                  //função se estiver autenticado(se loggedIn for true) 
                                                  //com isso consigo enriquecer a execução da função.
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));

/*
- Vamos supor que eu quero controlar a execução de uma função e essa função só será executada se o 
usuário estiver autenticado.
- Vamos criar um decorator sem a sintaxe de decorator no JavaScript
*/