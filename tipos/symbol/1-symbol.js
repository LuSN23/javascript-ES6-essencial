const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a simbol2:', symbol1 === symbol2); //Dá false

/*A princípio a grande proposta do symbol era permitir atributos privados dentro 
de objetos ou classes, mas como o JavaScript não tem o modificador de acesso(private, public, 
protected) algumas pessoas utilizam a mesma convensão do Python de colocar o _ na frente, porém 
não faz parte da documentação, ele acabou por ser mais um atributo único mesmo*/

