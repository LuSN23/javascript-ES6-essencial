//Buscar elementos:

//Método find()
/*
Definição:
Retorna o primeiro item de um array que satisfaz a condição.(Faz uma busca)
- É possível passar como parâmetro value, index e array também com em forEach().
- Se nenhum valor satisfazer a condição passada, o retorno é undefined.
*/
//Exemplo 01: 
const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo); // 3      (Primeiro item que é maior que 2)


//Método findIndex()
/*
Retorna o índice do primeiro item de um array que satisfaz a condição.
- Diferença entre find() e findIndex() é que o 1º retorna o valor e o 2º o índice.
*/
//Exemplo 01:
const arr = [1, 2, 3, 4];

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo); // 2



//Método filter()
/*
Definição:
Retorna um novo array com todos os elementos que satisfazem a condição.
*/
//Exemplo 01:
const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo); // [ 3, 4 ]   (Array com todos os valores que são maiores que 2)


//Método indexOf()
/*
Definição:
Retorna o primeiro índice em que um elemento pode ser encontrado no array.
*/
//Exemplo 01:
const arr = [1, 3, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3); //Encontra em qual índice é a primeira ocorrência do 3

console.log(firstIndexOfItem); // 1   (Encontrado no índice 1)
