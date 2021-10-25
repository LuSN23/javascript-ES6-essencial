/*
do {
    declaracao
} while(condicao);
*/

let i = 0;

do {                 //Ele executa 1 vez e depois verifica a condição(diferença com o while)
    i += 1;
    console.log(i);

} while (i < 5);     //Verifica se ainda corresponde a condição depois de executar... por isso chegar até o 5

//while: Verifica condição no começo
//do...while: Verifica condição no final