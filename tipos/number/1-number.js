const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

//Transforma uma string em float(do tipo Number)
console.log('\nString parseada para float: ', parseFloat('13.22'));
//Se o último valor fosse 0, como em 13.20, ia ficar 13.2, se eu quiser que o 0 apareça, uso o toFixed()


//Transforma uma string em int(do tipo Number)
console.log('\nString parseada para int:', parseInt('13.20'));