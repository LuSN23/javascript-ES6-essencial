/*
switch(expressão) {
    case valor1:
        [break;]
    case valueN:
        [break;]
    default:
        [break;]
}
*/

const fruit = 'pêra';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pêra':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
}


//Para não ter muitos if e ficar uma bagunça podemos usar a estrutura do switch
//Caso não seja acrescentado um break para interromper a execução, será também executado o valor de default
//Caso eu coloque na const uma fruta que não exista, cai em default

