//Criar um array

//Criações básicas:
const arr = [1, 2, 3]; //Forma mais simples de criação de um array
const arr2 = new Array(1, 2, 3); //Instanciando do objeto construtor Array



//Método Array.of()
/*
Definição:
Cria uma nova instância de array a partir do número de parâmetros informados.
- A diferença entre Array.of() e o constructor Array está em como lidam com argumentos integer:
Array.of(7) = Cria um array com um único elemento, 7.
Array(7) = Cria um array vazio com uma propriedade length de 7(7 posições vazias)(e que não tem o valor undefined). 
*/
//Exemplo 01:
const arr = Array.of(1, 2, 3);
//Exemplo 02: (No browser)
const people = Array.of('John', 'Chris', 'Jenny'); //Pega cada parâmetro e coloca numa posição de um array
people //(3) ["John", "Chris", "Jenny"]
//Exemplo 03: (No browser)
const numbersAndStrings = Array.of(1, 2, 'strings', 'texto'); //Aceita dados diferentes no mesmo array
numberAndStrings //(4) [1, 2, "strings", "texto"]



// Usando o Array
/*
Definição:
Cria uma nova instância de array de acordo com os parâmetros informados.
*/
//Exemplo 01:
const arr = Array(3); //Apenas com um integer, cria o número de items, mas vazios
// [empty x 3]
const arr2 = Array(3, 2); //Será criado de maneira semelhante ao Array.of()
// [3, 2]
//Exemplo 02: (No browser)
const arrWith3Positions = Array(3);
arrWith3Positions //(3) [empty x 3]
//Exemplo 03: (No browser)
const peopleList = Array('John', 'Chris', 'Jenny');
peopleList //(3) ["John", "Chris", "Jenny"]

//Array.of() e Array() se baseam nos parâmetros passados



//Método Array.from()
/*
Definição: 
Cria uma nova instância de array a partir de um parâmetro(obrigatório) array-like ou iterable object.
array-like = são objetos que tem índices e a propriedade length, então eles são parecidos com arrays.
Exemplo: nodeList, document.querySelector para buscar elementos.
iterable object = são objetos que implementam o método Symbol.iterator(para fazer um loop/iteração).
Exemplo: setMap().
*/
//Exemplo 01:
const divs = document.querySelectorAll('div'); //Todas as divs encontradas serão armazenadas dentro da
                                               //variável divs, no formato nodeList e por isso não posso 
                                               //usar funções de array como pop() e forEach().
const arr = Array.from(divs); //Para conseguir isso, uso o Array.from para transformar num array e poder 
                              //usar os métodos de array acima.
//Exemplo 02: (No browser)
const divs = document.querySelectorAll('div'); //Buscando elementos html div
divs //Retorna uma nodeList da página atual
//tentando usar métodos de array na NodeList:
divs.pop // undefined
divs.shift // undefined
const divArray = Array.from(divs); //Transformando a NodeList num novo array
divArray
divArray.pop();
divArray.shift();

//No fim transforma um grupo de elementos html em um array com eles com o Array.from()