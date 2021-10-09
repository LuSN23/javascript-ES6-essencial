const user = {
    name: 'Luciana',
    lastName: 'Sarai Nunes'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));
//*Experimental, antes de usar verificar a compatibilidade com o navegador