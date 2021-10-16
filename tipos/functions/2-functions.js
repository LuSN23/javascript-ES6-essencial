(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn, //Quando tem o mesmo nome chave e valor
        getName //getName: getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

/* Existem tanto função comum como arrow function e um aspecto 
importante sobre elas é o contexto de criação(a grande diferença)
Na função comum: this faz referência em como a função foi 
criada(dinamismo)(4 maneiras de invocar uma função regular). 
-Depende de onde for executada e ela for executada 
dentro do contexto de um objeto, o this vai referenciar o objeto.
Na arrow function mesmo que eu a chame dentro de um objeto ela vai 
sempre respeitar o léxico, não define sozinha seu contexto de 
execução.
-No momento de criação dela ela apontava para um this, sempre será 
aquele this.
this = significa o contexto de execução ele é dinâmico e 
vai depender de como a função é invocada */ 
