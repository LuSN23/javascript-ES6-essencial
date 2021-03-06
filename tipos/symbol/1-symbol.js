const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a simbol2:', symbol1 === symbol2); //Dá false

/*A princípio a grande proposta do symbol era permitir atributos privados dentro 
de objetos ou classes, mas como o JavaScript não tem o modificador de acesso(private, public, 
protected) algumas pessoas utilizam a mesma convensão do Python de colocar o _ na frente, porém 
não faz parte da especificação, ele acabou por ser mais um atributo único mesmo*/

//Previnir conflito entre nomes de propriedades
//Perceba que a inicialização deles são iguais
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');
//Evita-se sobrescrever as propriedades porque cada um é único, ele habilita uma forma de fazer isso(ver o OUTPUT)
const user = {
    [nameSymbol1]: 'Luciana',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Sarai Nunes'
}

console.log(user);


//Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log(`\nValor da chave = ${key}: ${user[key]}`);
    }
}
/*
key = nome de constante genérico para comportar o valor do resultado do nome das 
propridades.
hasOwnProperty() retorna um valor boolean indicando se o objeto tem a propriedade 
específica(que não seja herdada mas própria)
*/
console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));
//Object.keys() e Object.values() também só retornam as propriedades enumerables

/*ENUMERABLES: São as propriedades que tem a flag interna setada como true, o 
que é default para propriedades criadas a partir de simples atribuição ou via 
um inicializador de propriedade*/ 
/*A função for...in mostra todas as propriedades que são enumerables, então o symbol
não aparecerá na saída. Mostra um pouco do modificador de acesso private, porque não 
dá para acessar o symbol com estruturas padrão do JavaScript como as de repetição. Há 
no entanto, outras maneiras de fazer isso*/

//Exibir Symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));
//Object.getOwnPropertySymbols() retorna um array com todas as propriedades Symbol de um objeto 

//Acessando todas as propriedades de um objeto
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user)); //Apenas as chaves/propriedades
/* Reflect não é um objeto construtor(não é possível instanciá-lo) e suas 
propriedades e métodos são estáticos. Uma mistura dos operadores in e delete */

//Criar um enum
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
};
//ENUMs(enumeradores): são valores pré-definidos
//É possível "simular" ENUMs usando Symbols