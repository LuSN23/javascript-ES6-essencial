//break
console.log('Exemplo da utilização de break:');

var index = 0;

while(true) { //O break tem poder de cancelar esse true
    index++;

    if(index > 2) {
        break;  //Sai do laço de repetição/interrompe a execução
    }
    console.log(index); //1 2
}

//continue
console.log('\nExemplo de utilização de continue:');
const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++) {
    const element = array[index];

    if(element % 2 === 0) {
        continue; //Se o valor do índice do array for divisível por 2, pule para o próximo(não exibindo ele)
    }
    console.log(element); //1 3 5
}

//break: Finaliza a execução, sai do laço
//continue: Pula o elemento que satisfaz a condição/o ignora