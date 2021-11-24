//Inserir e remover elementos

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