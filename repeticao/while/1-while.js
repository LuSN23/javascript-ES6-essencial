/*
while(condicao){
    declaracao
}
*/

var n = 0;
var x = 0;

while(n < 3){ //while só começa a ser executado se a condição for true
    n++;     //Se não tiver incremento aqui, fica num loop infinito
    x += n;  //1, 3, 6
}

console.log(x);