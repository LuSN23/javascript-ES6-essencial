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