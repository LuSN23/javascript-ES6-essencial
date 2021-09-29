var nameVar = 'Luciana';
let nameLet = 'Luciana';
const nameConst = 'Luciana';

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);





/*Importante uma variável não interferir com outras variáveis, 
para isso existem os escopos de global, de função e de bloco(lembrando 
do closure e da capacidade das variáveis lembrarem de seu contexto
de criação)*/
//Não é uma boa prática escrever em escopo global
//window é o objeto que representa o escopo global no console
//let e const respeitam escopo de bloco, var não