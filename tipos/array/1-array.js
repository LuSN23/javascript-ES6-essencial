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