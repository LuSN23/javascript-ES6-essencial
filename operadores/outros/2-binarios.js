//in
something in somethingItems 
//Verifica se o primeiro operando está no segundo operando

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;         //retorna true
3 in arvores;         //retorna true
6 in arvores;         //retorna false (é um array de 5 posições)
"cedro" in arvores;   //retorna false(você deve especificar o número do índice, não o valor daquele índice)
//"cedro" in arvores[2]; (Aí sim retornaria true)
"length" in arvores;  //retorna true (length é uma propriedade de array) (string e array tem a propriedade length)

//Objetos predefinidos
"PI" in Math;            //retorna true
//Math é um objeto global, não é um objeto construtor, possui propriedades e métodos estáticos
var minhaString = new String("coral"); //nesse caso é um objeto contrutor(String)
"length" in minhaString; //retorna true


