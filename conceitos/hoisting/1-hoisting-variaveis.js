//Hoisting de variáveis
function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

//O que está acontecendo realmente: 
/*
function fn(){
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
*/

//Em JavaScript nós sabemos o tipo de variável só no momento de atribuição
/* Em linguagens sem hoisting o primeiro console.log daria erro
No JavaScript a variável é exibida como undefined mas é reconhecido como 
existente */

//Possível motivo da criação do escopo de bloco com o let e o const
//Permite o uso de uma variável antes de ela ser definida
//HOISTING: Elevação ao topo da execução, é uma característica da linguagem
//2 tipos: De variáveis e de funções
//Variável: Só eleva a criação/declaração da variável e não a sua atribuição
//Função: É içada ao topo como um todo  
