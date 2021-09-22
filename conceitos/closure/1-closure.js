function init() {
    const exemplo = 'Essa variável';

    return function() {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);
        
        return function() {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);
            
            return function() {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

/* 
Pode-se subtituir isso:

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

Por isso:

init()()()(); Executando todas as funções em uma linha só, não usado na vida real
Já que podemos passar funções dentro de funções
*/

/* MANEIRA IDEAL: 
(Fica mais fácil saber de onde vem a variável exemplo, 
ao passa-lá como parâmetro, mas dessa forma nesse exemplo não funcionaria, 
é só para lembrar que funções puras são melhores para usar)

function init() {
    const exemplo = 'Essa variável';

    return function(exemplo) {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}`);
        
        return function(exemplo) {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}`);

            return function(exemplo) {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}`);
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3(); 
*/

/*Exemplo para saber mas evitar porque torna-se complicado gerenciar de 
onde vem a variável em projetos antigos e/ou mais longos, preferir sempre 
funções puras*/
//FUNÇÃO PURA: Função que recebe parâmetro/parâmetros e retorna um resultado.

/*CLOSURE: Função aninhada, tem capacidade de ver o escopo externo e portanto usar
variáveis dele(Não precisa ter variáveis próprias). Closure é um tipo especial de
objeto que combina a função e o ambiente em que foi criada(este consistindo de quaisquer 
variáveis que estavam no momento em que a função foi criada).
Aplicação prática: Uma closure deixa você associar dados(do ambiente) com uma função que 
trabalha esses dados, isso está diretamente ligado com programação orientada a objetos, em 
que objetos nos permitem associar dados(as propriedades do objeto) utilizando um ou mais métodos.
Então você pode usar uma closure onde você normalmente utilizaria um objeto de um único método.
Em JavaScript há muitos códigos baseados em eventos - nós definimos comportamentos e então atribuimos 
um evento que será disparado pelo usuário(quando uma tecla for pressionada por exemplo). Nosso código
normalmente é utilizado como callback(uma função que será executada como resposta ao evento).
FUNÇÃO CALLBACK: Aquela que tem uma função bem definida. Função passada a outra função como argumento, 
que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
ESCOPO LÉXICO: Ambiente em que uma variável é declarada */ 