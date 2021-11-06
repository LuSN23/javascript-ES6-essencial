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

//EXEMPLO OTIMIZADO:
'use strict';

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);//Inserindo em prototype de Cachorro que 
//ele deriva do objeto Animal, e por isso herda o que está nele
Cachorro.prototype.latir = function() { //Inserindo novo método no prototype
    console.log('Au! au!');             //de Cachorro
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

/*
Object.create() = Cria um novo objeto, utilizando um outro objeto existente como
protótipo para o novo objeto a ser criado.
- create() é um método de Object
- Quando crio a minha função construtora, ela permite que eu escreva no prototype(
que contém a definição do meu objeto).
- Nesse caso eu estou escrevendo que o prototype de Cachorro é derivado do prototype 
de Animal e inserindo um novo método que em Cachorro que é latir().
- Então essas funções movimentar() e latir(), não serão criadas novamente, elas já 
estarão declaradas nos prototypes.
- Posso inserir novas propriedades e métodos no meu prototype e todas as instâncias 
as terão atualizadas. ATENÇÃO: *(Isso, no entanto, é bem perigoso, porque é possível alterar 
implementação de tipos nativos como o String e bagunçar métodos já prontos, não deve-se 
alterar tipos já existentes).
*/