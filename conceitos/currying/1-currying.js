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
retornando uma nova função*/