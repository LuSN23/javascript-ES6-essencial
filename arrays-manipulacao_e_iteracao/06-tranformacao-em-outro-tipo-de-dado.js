//Transformando em outro tipo de dado

//Método join()
/*
Junta todos os elementos de um array, separados por um delimitador e retorna uma string.
- Tranforma array em string.
*/
//Exemplo 01:
const arr = [1, 2, 3, 4, 5];

arr.join('-'); // "1-2-3-4-5"


//Método reduce()
/*
Definição:
Retorna um novo tipo de dado iterando cada posição de um array.
- Pode retornar um novo tipo de dado ou um array.
- O 1º parâmetro é o que eu vou retornar(total).
- No final o 0 demonstra que começa/inicia com um valor de um número inteiro. Eese parâmetro é o 
importante, que é o tipo que você vai retornar(é o último).
- Depois do 1º parâmetro, vem os já conhecidos value, index e array.
*/
//Exemplo 01: 
const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0); // 15    (Somando cada valor do array à total)

//Exemplo 02: (No browser)
const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
];

//Somando notas dos alunos, para o total das notas em totalGrades
students.reduce((totalGrades, student) => totalGrades += student.grade, 0); //16

//Se eu quisesse ver a média das notas dos alunos
students.reduce((totalGrades, student) => totalGrades += student.grade, 0)/students.length; // 5.333

//Retornando uma string
students.reduce((studentsNames, student) => studentsNames += student.name + ' ', ''); //' ' dá espaço
// "John Jenny Peter"