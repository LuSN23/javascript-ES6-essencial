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

//Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;   //retorna true
"modelo" in meucarro;  //retorna true

//instanceof
objeto instanceof tipoObjeto
//Verifica se o primeiro operando é intância do segundo operando

var dia = new Date(2010, 12, 17);

if(dia instanceof Date) { //retorna true e executa o código abaixo
    //code here
}


