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

//OR lógico (||)
exp1 || exp2

var o1 = true || true;      //t || t retorna true
var o2 = false || true;     //f || t retorna true
var o3 = true || false;     //t || f retorna true
var o4 = false || (3 == 4); //f || f retorna false
var o5 = "Gato" || "Cão";   //t || t retorna Gato
var o6 = false || "Gato";   //f || t retorna Gato
var o7 = "Gato" || false;   //t || f retorna Gato

/* *ATENÇÃO ao valor que vai ser colocado dentro da variável, 
no ||/OR retorna o true se houver apenas 1 true,
ou
o primeiro true no caso de 2 true.
No caso de 2 true como 2 strings true, retorna a primeira string true.
Muito usado na atribuição de variáveis:
conteudo = conteudo || 'fallback'; (se conteudo for undefined retorna o fallback) 
fallback = Plano B para alguma ação do programador */

//NOT lógico (!)
!exp1

var n1 = !true;   //!t retorna false
var n2 = !false;  //!f retorna true
var n3 = !"Gato"; //!t retorna false

