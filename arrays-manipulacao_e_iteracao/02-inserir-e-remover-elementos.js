//Inserir e remover elementos

//Inserindo e removendo elementos no final:
//Método push()
/*
Definição:
Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array(length).
*/
//Exemplo 01: (No browser)
const frutas = ['melancia', 'banana'];
frutas.push('laranja'); // 3
frutas // (3) ["melancia", "banana", "laranja"]

//Exemplo 02: 
const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola');
console.log(arrLength); // 4

console.log(arr); // [ 'banana', 'melancia', 'abacate', 'acerola' ]


//Método pop()
/*
Definição: 
Remove o último elemento de um array e retorna o elemento removido.
*/
//Exemplo 01:
const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem); // abacate

console.log(arr); // ['banana', 'melancia']

//Exemplo 02: (No browser)
const frutas = ['melancia', 'banana', 'laranja'];
frutas // (3) ["melancia", "banana", "laranja"]
frutas.pop(); // "laranja"
console.log(frutas); // ["melancia", "banana"]



//Inserindo e removendo elementos no começo:
//Método unshift()
/*
Definição: 
Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array
*/
//Exemplo 01:
const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength); // 4

console.log(arr); // [ 'acerola', 'banana', 'melancia', 'abacate' ]

//Exemplo 02: (No browser)
const frutas = ['melancia', 'banana'];
frutas // (2) ["melancia", "banana"]
frutas.unshift['laranja'] // 3
frutas //(3) ["laranja", "melancia", "banana"]


//Método shift()
/*
Definição:
Remove o primeiro elemento de um array e retorna o elemento removido.
*/
//Exemplo 01: 
const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.shift();

console.log(removedItem); // banana

console.log(arr); // [ 'melancia', 'banana']

//Exemplo 02: (No browser): 
const frutas = ['laranja', 'melancia', 'banana'];
frutas // (3) ["laranja", "melancia", "banana"]
frutas.shift(); // "laranja"





//Outros:
//Método concat()
/*
Definição:
Concatena um ou mais arrays retornando um novo array. (Faz um merge) e não mexe nos arrays 
originais(imutabilidade). 
*/
//Exemplo 01: (No browser)
const frutas = ['melancia', 'banana'];
frutas // (2) ["melancia", "banana"]
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
alimentos // (5) ["melancia", "banana", "coxinha", "kibe", "empada"]
frutas // (2) ["melancia", "banana"]           //Não muda
salgados // (3) ["coxinha", "kibe", "empada"]  //Não muda

//Exemplo 02:
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const novoArr = arr.concat(arr2);

console.log(arr); // [ 1, 2, 3 ]

console.log(arr2); // [ 4, 5, 6 ]

console.log(novoArr); // [ 1, 2, 3, 4, 5, 6 ]


//Método slice()
/*
Definição:
Retorna um novo array "fatiando" o array de acordo com início e fim. (Apresenta a imutabilidade 
também).
*/
//Exemplo 1:
const arr = [1, 2, 3, 4, 5];

arr.slice(0, 2); // [1, 2]
//Começa no índice 0 e o 2 onde vai parar(para no valor 3(índice 2) e não mostra ele, então sempre 
//colocar um índice a frente daquele que você quer).

arr.slice(2); // [3, 4, 5]
//Se colocar apenas 1 índice, ele entende que é para pegar deste índice em diante. (O valor 3 está 
//no índice 2)

arr.slice(-1); // [5]
//Número negativo é o inverso -1(significa quantos pegar) pega a última posição e exibe o último valor

arr.slice(-3); // [3, 4, 5]
//Pegará os 3 últimos valores dos 3 últimos índices


//Método splice()
/*
Definição:
Altera um array adicionando novos elementos enquanto remove elementos antigos. Não é imutável, 
mexe na referência do array que chama o método, ou seja, altera os arrays originais.
- Tem como retorno os índices que forem removidos, no caso de nenhum elemento removido será [] .
*/
const arr = [1, 2, 3, 4, 5];

arr.splice(2); // [3, 4, 5]
//A partir do índice 2 vai ser removido em diante
console.log(arr); // [1, 2]

arr.splice(0, 0, 'first'); // [] 
// (1º parâmetro 0 é onde vou mexer, 2º quantos itens vou remover 0, 3º o que quero adicionar 'first')
// a partir da do parâmetro 1 que diz onde, como é índice 0 'first' fica no primeiro índice do array
console.log(arr); // [ 'first', 1, 2 ]

//Exemplo 02: (No browser)
const frutas = ['melancia', 'banana'];
frutas // (2) ["melancia", "banana"]
//Supondo que quero adicionar a partir de 'melancia'
frutas.splice(1, 0, "acerola"); // [] 
frutas // (3) ["melancia", "acerola", "banana"]
frutas.splice(2, 1, "laranja", "amora"); // ["banana"]
//Remove 'banana' da posição 2 e adiciona 'laranja' e 'amora' a partir da posição 2, no lugar da 
//'banana'
frutas // (4) ["melancia", "acerola", "laranja", "amora"]