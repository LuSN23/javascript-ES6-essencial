//Iterar elementos:

//Método forEach()
/*
Definição:
Iteração de cada item dentro de um array.
- Principal função.
- Para cada alteração consigo pegar o item que está sendo lido no momento, o índice, e o array que 
estou iterando.
- Só executa uma operação, não modifica o array original(imutabilidade).
*/
//Exemplo 01:
const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {         //o 1º parâmetro value = valor do item, 
                                        //o 2º parâmetro = index é a posição do array,
                                        //aceita um 3º parâmetro, que é o array lido, nesse caso arr
    console.log(`${index}: ${value}`); //1º item posição e valor, 2º item posição e valor...
});
/*
0: 1
1: 2
2: 3
3: 4
4: 5
*/

//Exemplo 02 - Parte 1: (No browser)
const frutas = ['melancia', 'acerola', 'laranja', 'amora'];

frutas.forEach(fruta => console.log(fruta)); 
/*
melancia
acerola
laranja 
amora
*/
//Exemplo 02 - Parte 2: (No browser)
frutas.forEach((fruta, index) => console.log(index, fruta));
/*
0 "melancia"
1 "acerola"
2 "laranja"
3 "amora"
*/
//Exemplo 02 - Parte 3: (No browser)
frutas.forEach((fruta, index, arr) => console.log(index, fruta, arr));
/*
0 "melancia" (4) ["melancia", "acerola", "laranja", "amora"]
1 "acerola" (4) ["melancia", "acerola", "laranja", "amora"]
2 "laranja" (4) ["melancia", "acerola", "laranja", "amora"]
3 "amora" (4) ["melancia", "acerola", "laranja", "amora"]
*/


//Método map()
/*
Definição:
Retorna um novo array, do mesmo tamanho, iterando cada item de um array.
- A grande diferença entre forEach() e map() é que o forEach() só itera os elementos, o map retorna um 
novo array desse array usado.
- Não mexe na referência do array, retorna um novo array(imutabilidade)
- Invoca a função callback(passada como argumento)
*/
//Exemplo 01:
const arr = [1, 2, 3, 4, 5];

arr.map(value => value * 2); // [2, 4, 6, 8, 10]

//Exemplo 02: (No browser)
const frutas = ['melancia', 'acerola', 'laranja', 'amora']; //array target(no qual vai ser executada a 
                                                            //operação)

frutas.map((fruta, index) => `${index} - ${fruta}`);
// (4) ["0 - melancia", "1 - acerola", "2 - laranja", "3 - amora"]
frutas
// (4) ["melancia", "acerola", "laranja", "amora"]
 

//Método flat()
/*
Definição:
Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo 
com a profundidade especificada(depth).
*/
//Exemplo 01:
const arr = [1, 2, [3, 4]]; //Profundidade(depth) de 1, porque nada foi especificado

arr.flat(); // [1, 2, 3, 4] //Aqui em flat(1) é o mesmo que flat(), por isso o resultado

//Exemplo 02: (No browser)
const idades = [120, 34, [35, 60, [70, 40]]]; //Arrays dentro de arrays
idades // (3) [20, 34, Array(3)]  (Array(3) Porque são 2 números(2 índices) e mais 1 array em 1 índice)
idades.flat(2); //Por padrão o flat() já desse 1 item de depth já resolvendo o 35, 60
                //Com o 2, ele desse mais um degrau de profundidade pegando os 70, 40
                //Isso é um 'alteração recursiva'
// (6) [20, 34, 35, 60, 70, 40]


//Método flatMap()
/*
Definição:
Retorna um novo array assim como a função map e executa um flat de profundidade 1 (junção das 2)
- 1º executa um map() e depois um flat(1)
*/
//Exemplo 01: 
const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]); // Aqui value * 2 está dentro de 1 profundidade e o flat resolve isso
// [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]); // 2 profundidades em value * 2
// [[2], [4], [6], [8]]              //Para monstrar que ele(flatMap()) só resolve 1 profundidade

//Método keys()
/*
Definição:
Retorna um Array Iterator que contém as chaves para cada elemento do array.
- Um iterator é um objeto que emprega os iterations protocols(algumas convenções). Método @@iterator na 
cadeia de protótipos. (Tem a ver com o emprego do método next() também, com dois valores: value e done).
- done será false quando a iteração ainda não tiver terminado, e true quando for o último elemento a ser 
iterado.
- value é o índice do atual elemento.
*/
//Exemplo 01:
const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
//(value: 0, done: false)

arrIterator.next();
//(value: 1, done: false)

arrIterator.next();
//(value: 2, done: false)

arrIterator.next();
//(value: 3, done: true)