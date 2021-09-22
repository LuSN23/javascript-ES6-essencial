//Função com aplicação da técnica Currying

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

/*A function soma(a) vai retornar function soma(b), e então quando
passo soma(2) na const soma2, ela fica gravada e depois posso passar
como parâmetro qualquer número em soma2() porque a sempre vai valer 2 */ 