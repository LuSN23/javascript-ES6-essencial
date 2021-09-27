const user = {
    name: 'Luciana',
    lastName: 'Sarai Nunes'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);

//Para visualizar que não ocorreu alteração no objeto user
//console.log(user);

/*SRING LITERAL: `Aqui está um tipo de animal: ${exemplo}` 
OPERADOR SPREAD: ...user (aqui nesse exemplo, todas as propriedades de user vai 
ser trazida para dentro de getUserWithFullName e depois vai ser retornado um novo objeto
com uma nova propriedade(fullName)  
propriedade chamada)
IMUTABILIDADE: Não alteração do elemento em sua memória, e sim a 
troca da referência para outro local de memória(apontar para), sempre 
cria-se um novo elemento e troca-se a referência para ele(isso evita mutações, 
dificuldade de encontrar os elementos e corrigir bugs)
Objetos e arrays são passados por referência, ou seja, alteram o local de memória 
em que foram armazenados, por isso é preciso usar artifícios para que isso não ocorra
(Aí que entra a criação de um novo objeto(userWithFullName) e não alteração do objeto(user) no exemplo acima). */