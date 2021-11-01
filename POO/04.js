new Foo(...);

/*
O que ocorre?
1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o 
'this' vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 
'return'. Senão, será retornado o objeto criado no número 1.
*/

/*Para ser feito no navegador para poder explorar as informações de __proto__, 
a função construtora Pessoa e a cadeia de prototype*/
//1 e 2:
function Pessoa(name){ //Criando a função construtora Pessoa com o atributo name
    this.name = name;
}

const p = new Pessoa('Luciana'); //Criando um novo objeto/instanciando e passando o nome Luciana como parâmetro

console.log(p); //Verificando o conteúdo

