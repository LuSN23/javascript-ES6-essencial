// Igual (==)
//Retorna verdadeiro caso os operandos sejam iguais. 
"3" == var1
3 == '3' //Retorna verdadeiro, valor igual mas tipo diferente.
//linters geralmente são configurados para não permitir esse tipo de comparação 3 == '3' como true

//Não Igual/diferente (!==)
//Retorna verdadeiro caso os operandos não sejam iguais
var2 != "3"

//Estritamente igaul (===)
//Retorna verdadeiro caso os operadores sejam iguais e do mesmo tipo
3 === var1

//Estritamente não igual/diferente (!==)
//Retorna verdadeiro caso os operandos não sejam iguais/diferentes e/ou não sejam do mesmo tipo
var1 !== "3"
3 !== '3'

//Maior que (>)
//Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
var2 > var1
"12" > 2

//Maior que ou igual (>=)
//Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
var2 >= var1
var1 >= 3

//Menor que (<)
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"
