let arr = [3, 5, 7];
arr.foo = "hello"; //função e array são objetos então é possível adicionar propriedades a eles

for(let i in arr) {
    console.log(i); //"0", "1", "2", "foo"
}
//Uma propriedade enumerada diferente é atribuída a cada iteração
//Retorna além de indíces