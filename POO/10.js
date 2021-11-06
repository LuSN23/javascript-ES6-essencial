//EXEMPLO MAL OTIMIZADO:
'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4); //Nesse caso, esse 'this' refere-se a Animal(traz o 
                          //contexto para dentro de Cachorro)
    
    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

/* 
- call() = Invoca uma função com um dado valor this e argumentos passados 
individualmente. Com call() você pode escrever um método uma vez e então 
herdá-lo em outro objeto, sem ter que reescrever o método para o novo objeto.
- Function.prototype.call() => método de Function
- Aqui temos a implementação de novos métodos dentro de Animal e de Cachorro.(Todo
Animal se movimenta e todo Cachorro late).
- O problema desse exemplo é que toda vez que eu criar um novo Cachorro as funções 
movimentar() e latir() serão criadas novamente, já que todos irão movimentar-se e 
latir da mesma forma, então o código não está muito preciso/otimizado.
*/