const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log(`Alunos aprovados: `);
console.log(getApprovedStudents(students));

console.log(`\nLista de alunos:`);
console.log(students);



/*filter vai filtrar os alunos para um novo objeto, 
mas não vai alterar o objeto antigo (students), 
mas retornar apenas os objetos que correspondam ao 
critério da nota maior ou igual a que 7
FILTER: Cria um novo array com todos os elementos que 
passaram no teste implementado pela função fornecida*/ 