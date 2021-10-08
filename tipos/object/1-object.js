let user = {
    name: 'Luciana'
};

console.log(user);

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);

/* Para acessar a propriedade pode ser de 2 formas user.name, 
ou como se fosse um array e 'name' seu índice.
Quando precisamos acessar um objeto com um valor dinâmico, criamos 
uma função e toda vez que eu precisa evaluar eu chamo o colchetes 
de user[prop] por exemplo*/

const prop = 'name'; //propriedade que vai ser passada como parâmetro
user[prop] = 'Outro nome 3'; //Consigo também pegar a propriedade dessa forma

/*
function getProp(prop) {
    return user[prop];
} 
*/

console.log(user);

//Criando uma propriedade
user.lastName = 'Sarai Nunes';
console.log(user);

//Deletando uam propriedade
delete user.name;
console.log(user);