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
