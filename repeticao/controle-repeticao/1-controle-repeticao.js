//break
console.log('Exemplo da utilização de break:');

var index = 0;

while(true) { //O break tem poder de cancelar esse true
    index++;

    if(index > 2) {
        break;  //Sai do laço de repetição/interrompe a execução
    }
    console.log(index);
}