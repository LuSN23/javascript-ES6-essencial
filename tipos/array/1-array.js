const users = ['Luciana', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
     name: 'Luciana',
     age: 28,
     gender: gender.WOMAN
    },
    {
     name: 'Pedro',
     age: 43,
     gender: gender.MAN
    },
    {
     name: 'Jennifer',
     age: 18,
     gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

//Verificar se é array
console.log('A constante persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => { //person significa cada item
    console.log(`Nome: ${person.name}`);
});
/*
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});
*/
//O método forEach executa uma determinada função em cada item do array


//filter, map e reduce não alteram a referência do nosso objeto(imutabilidade), geram um novo

//Filtrar array
const womans = persons.filter(person => person.gender === gender.WOMAN);
console.log('\nNova lista apenas com mulheres:', womans);
//filter é uma condicional

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course: ', personsWithCourse);
//Gera valores alterados percorrendo cada item da coleção de valores do array

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);
/* Retorna a primeira variável age, e person o item que estou iterando.
Transforma o nosso array em outro tipo.
Também irá receber uma função.
Reduz vários valores a uma informação.
Importante retornar a propriedade aqui representada pelo age 
O 0 faz o JavaScript fazer uma conversão para number de um array(idade das pessoas)
O age começa com 0
Os parâmetros e a função são o handler
*/ 