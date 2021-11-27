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

