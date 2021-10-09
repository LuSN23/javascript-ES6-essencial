const user = {
    name: 'Luciana',
    lastName: 'Sarai Nunes'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));
//*Experimental, antes de usar verificar a compatibilidade com o navegador

//*Os próximos métodos ajudam a entender o conceito de imutabilidade no JavaScript

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Luciana Sarai Nunes'}); 
//Não é recomendado por causa da imutabilidade, devemos criar um objeto novo como no segundo exemplo abaixo

console.log('\nAdiciona a propriedade fullName no objeto user:', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age:26}));
//Para mostrar que não há alteração na referência do objeto com o segundo exemplo:
console.log(user); //Não há age, porque o assign gerou um novo objeto e não modificou o antigo

/*
assign = atribuir. 
user é o target e o segundo parâmetro a source 
Outra possibilidade:
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
*/

//CONSTANTES
//Previne toda as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nConstante newObj após as alterações:', newObj); //Será a mesma coisa do início
/*Lembrando que em objetos de constantes você consegue alterar as propriedades, 
mas não consegue alterar a referência(para onde aponta na memória), porém usando 
o método freeze() você consegue congelar e não permitir mais alterações das propriedades*/ 

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Luciana' };
Object.seal(person);

person.name = 'Luciana Sarai';
delete person.name;
person.age = 26;

console.log('\nConstante person após as alterações:', person);
/*freeze() x seal(): 
freeze(): [1]não permite alterar valor de uma propriedade,
[2]deletar a propriedade e nem [3]adicionar uma propriedade.
seal(): [1]permite apenas alterar o valor de uma propriedade*/