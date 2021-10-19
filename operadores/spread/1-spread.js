//Spread (...)

//Com objetos e arrays
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés']; //Conceito de imutabilidade -> Criando um novo array
//var musica = ['caneça', 'ombro', 'joelhos', 'e', 'pés'];

//Com funções
function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args); 
//fn(0, 1, 2);