//Exemplo 1
'use strict'; //Ativa o modo estrito

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vem este "split"?

//RESPOSTA:
'use strict';

const myText = String('Hello prototype!'); //Essa é a mesma declaração que a do exemplo acima.

console.log(myText.__proto__.split); //Referência à prototype que contém o método split() nele.

// [Function: split]

/*
Herança: No JavaScript é baseada em protótipos.
- A variável prototype armazena as definições do nosso objeto.
- Toda vez que criamos uma variável, ela virá com uma referência __proto__ para o 
prototype do tipo que a gente criou.
- Esse "tipo" é chamado de constructor(nesse caso String).

- Toda função construtora tem um prototype atrelado a ela então toda vez que crio uma variável
 baseada nela eu vou ter essa referência do __proto__ nela. 
*/

'use strict';

console.log(String.prototype.split); //split carregado no prototype da função construtora String
//[Function: split] 

/*
//Comparações:
//01
const myText = 'Hello prototype!';
const myText = String('Hello prototype!');

//02
myText.split('');
myText.__proto__.split;
String.prototype.split;
*/ 

//Algumas constatações:
'use strict';
const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split); //true
//Dá true porque ambos se referem ao mesmo prototype, o de String

console.log(myText.__proto__.split === String.prototype.split); //true

console.log(myText.constructor === String); //true
//myText é uma instância de String, portanto o constructor dela é String

//Resumindo:
//__proto__ -> prototype -> constructor
//(__proto__ aponta para prototype e o prototype é criado a partir de um constructor/função construtora)

//Fazendo isso: 
const myText = 'Hello prototype!';
//Quero dizer:
/*
myText.constructor -> String (Que o constructor do myText é String)
myText.__proto__ -> String.prototype (E o __proto__ dele vai ser igual ao String.prototype)
*/