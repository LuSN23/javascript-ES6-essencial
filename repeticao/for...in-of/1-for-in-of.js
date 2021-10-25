let arr = [3, 5, 7];
arr.foo = "hello"; //função e array são objetos então é possível adicionar propriedades a eles

for(let i in arr) {
    console.log(i); //"0", "1", "2", "foo"
}
//Uma propriedade enumerada diferente é atribuída a cada iteração, retorna indíces e chaves
//Retorna além de indíces

for (let i of arr) {
    console.log(i); //"3", "5", "7" 
}
//Uma propriedade iterável diferente é atribuída a cada iteração, retorna o valor dos índices e não de chaves
//Retorna o conteúdo dos índices e apenas conteúdos do array

//for...in = Índices e chaves
//for...of = Valores dos índices do array apenas