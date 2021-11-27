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


//Método lastIndexOf()
/*
Definição:
Retorna o último índice em que um elemento pode ser encontrado no array.
- Ao contrário de indexOf() que traz o 1º índice de uma ocorrência, traz o último índice de uma 
ocorrência(última vez que o valor aparece).
*/
//Exemplo 01:
const arr = [1, 3, 3, 4, 3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem);  // 4

//Método includes()
/*
Definição:
Retorna um booleano verificando se determinado elemento existe no array.
- Verifica o valor dos índices.
*/
//Exemplo 01:
const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.includes(1); //true

const hasItemTwo = arr.includes(2); //false


//Método some()
/*
Definição:
Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição.
*/
//Exemplo 01:
const arr = [1, 3, 3, 4, 3];  // 4 é par, então existe 1 elemento que tem resto 0 numa divisão por 2

const hasSomeEvenNumber = arr.some(value => value % 2 === 0); //true

//Exemplo 02: (No browser)
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];
students
/*
(3) [(...),(...),(...)]
    0: {name: "John", grade: 7}
    1: {name: "Jenny", grade: 5}
    2: {name: "Peter", grade: 4}
        length: 3
        __proto: Array(0)
*/
//Quero saber se algum aluno passou, tirando 7 ou mais
students.some(student => student.grade >= 7); //true
//Se eu quisesse saber quem era esse aluno eu uso o find() (como só tem 1)
students.find(student => student.grade >= 7); //{nome: "John", grade: 7}
//Se eu quisesse sabem o índice desse aluno, dá para usar o findIndex() (como só tem 1)
students.findIndex(student => student.grade >= 7); //0

//*Sempre a mesma sintaxe nesses métodos.