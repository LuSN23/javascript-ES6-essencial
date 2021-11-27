//Ordenar elementos:

//Método sort()
/*
Ordena os elementos de um array de acordo com a condição(tem que ser uma comparação?).
- Recebe o item atual(current) e o próximo item(next) como parâmetros.
- sort = classificar
- Retorna o array ordenado.
- O modo default é o ordenado de maneira crescente
*/
//Exemplo 01: (No browser)
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];

//Supondo que quero ordenar por notas em ordem crescente
students.sort((current, next) => current.grade - next.grade);
//Outro exemplo: firstItem.grade - secondItem.grade
/*
(3) [{...}, {...}, {...}]
    0: {name: "Peter", grade: 4}
    1: {name: "Jenny", grade: 5}
    2: {name: "John", grade: 7}
      length: 3
      __proto__: Array(0)
*/

//Ou por ordem decrescente
students.sort((current, next) => next.grade - current.grade); 
/*
(3) [{...}, {...}, {...}]
    0: {name: "John", grade: 7}
    1: {name: "Jenny", grade: 5}
    2: {name: "Peter", grade: 4}
      length: 3
      __proto__: Array(0)
*/

//Exemplo 02:
//Um sort() simples
const arr = [1, 3, 2, 5, 4];

arr.sort(); // [1, 2, 3, 4, 5]  //Apenas ordena os valores em ordem crescente


//Método reverse()
/*
Definição:
Inverte os elementos de um array.(Inverte o sentido do array).
*/
//Exemplo 01: 
const arr = [1, 2, 3, 4, 5];

arr.reverse(); // [ 5, 4, 3, 2, 1 ]
