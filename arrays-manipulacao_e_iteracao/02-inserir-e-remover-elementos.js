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