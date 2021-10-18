//AND lógico (&&)
exp1 && exp2

var a1 = true && true;      //t && t retorna true
var a2 = true && false;     //t && f retorna false
var a3 = false && true;     //f && t retorna false
var a4 = false && (3 == 4); //f && f retorna false
var a5 = "Gato" && "Cão";   //t && t retorna Cão
var a6 = false && "Gato";   //f && t retorna false
var a7 = "Gato" && false;   //t && f retorna false

/* *ATENÇÃO ao valor que vai ser colocado dentro da variável, 
no &&/AND retorna o false se houver apenas 1 false, 
ou 
o primeiro false no caso de 2 false. 
No caso de 2 trues como 2 strings true, retorna a 
segunda string true. */