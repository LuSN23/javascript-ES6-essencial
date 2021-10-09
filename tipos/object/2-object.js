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