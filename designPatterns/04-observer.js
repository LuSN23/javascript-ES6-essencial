//Observer:
/*
É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de 
objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
- Um exemplo famoso é o Vue: https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229
- Também há uma implementação com o RxJS(biblioteca) e no Angular: https://rxjs-dev.firebaseapp.com/guide/observable
*/

//Exemplo com os requisitos:
class Observable {
    constructor() {
        this.observers = []; //Lista de observers
    }

    subscribe(f) {
        this.observers.push(f); //Função subscribe e que permite adição de subscribers nos observers 
    }                           //com o push()

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f); //Para remover um 
                                                                                //um observer da lista
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}


/*
Uma definição bem simples de observable, basicamente ele tem que ter: 
- Manter uma lista de observers
- Uma função subscriber que permita que adicionemos subscribers nesses observers
- Um função notify()
* O unsubscribe do exemplo não é necessário para ser observable
*/

//Outro exemplo
class Observable {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
    }

    notify(data){
        this.observers.forEach(fn => fn(data)); //Pegar a função e chamar a função passando um dado(data)
    }
    
    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn); //Se obs só retorna o que for 
    }                                                              //diferente dessa função(fn)
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1); //Chamar a função subscribe registrando todas as const acima 
o.subscribe(logData2);
o.subscribe(logData3);


o.notify('notified 1'); //Então vou chamar a função notify passando alguma coisa
//Quando chamar o notify() tudo o que tiver na minha lista de subscribe será disparado/executado
//O que acontece se eu der um unsubscribe em logData2:
o.unsubscribe(logData2);
o.notify('notified 2');
/*
Subscribe 1: notified 1
Subscribe 2: notified 1
Subscribe 3: notified 1
Subscribe 1: notified 2
Subscribe 3: notified 2
 */

/*
- No constructor dela tem que ter um atributo que corresponde a uma lista, aqui é o observers
- Em notify(data) recebe um dado 
*/