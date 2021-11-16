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