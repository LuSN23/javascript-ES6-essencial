//Objeto:
const name = 'Luciana';

//Não podemos alterar o valor
name = 'Guilherme';

const user = {
    name: 'Luciana'
};
//Mas se for um objeto podemos trocar suas propriedades
user.name = 'Outro nome';
console.log(user.name);

//Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Luciana'
};

/*Além de criar constantes, quando atribuido um valor 
primitivo a const ele não permitirá a mudança de valor da variável, 
mas se eu criar um objeto torna-se possível mudar as propriedades dele. 
Vale também para arrays, esses 2 são tipos por referência. Mas não se pode 
mudar para onde o ponteiro dele estará apontando(no espaço memória). 
Não posso reatribuir, mas sim mudar o valor. 
Para tornar uma const que é um objeto ou array "imóvel", é possível congelar o 
valor dentro dela.
Recapitulando: 
-Const de tipo primitivo = Não consigo alterar
-Const de tipo por referência => Consigo alterar o valor da propriedade, 
mas não a referência.
 */
//Essa parte é para detalhar alguns aspectos do const
