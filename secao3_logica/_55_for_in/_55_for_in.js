const pessoa = {
    nome: 'Caio',
    sobrenome: 'Chaves',
    idade: 23
};

for(let chave in pessoa){
    console.log(chave); // RETORNA OS ATRIBUTOS => nome
    console.log(pessoa[chave]); // RETORNA OS VALORES DOS ATRIBUTOS pessoa[nome]
}

const nomes = ['Caio', 'Juliana', 'Heitor'];

for(let nome in nomes){
    console.log(nome, nomes[nome]);
}