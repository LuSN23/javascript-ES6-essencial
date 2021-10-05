//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador:`, splittedText);

//Busca um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log(`\nSubstituição de valor: `, replacedText);

