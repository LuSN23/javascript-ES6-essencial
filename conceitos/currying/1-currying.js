//Função comum:
function soma(a, b){
    return a + b;
}

soma(2,2);
soma(2,3);
soma(2,4);
soma(2,5);

//Observe que o 2 sempre se repete
//Podemos usar a técnica na função soma()


/*-Currying é bem comum em linguagens funcionais
-JavaScript não é por padrão funcional, mas é adaptável
CURRYING: É a técnica de transformar uma função com n(mais de 1) parâmetros
em apenas 1 função que recebe 1 parâmetro e para cada parâmetro vai
retornando uma nova função
Outra forma de definir: 
Currying é o nome dado à técnica de dividimos uma função que recebe vários argumentos 
numa série de funções cada uma lidando com um argumento da função inicial.
*Pode ser confundido com partial application que é a "memorização" de um argumento e 
depois tratar os outros(que sejam mais que 1) adicionando-os de uma vez e não um de cada
vez*/