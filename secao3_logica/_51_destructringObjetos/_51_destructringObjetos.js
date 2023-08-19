const pessoa = {
    nome:'Caio',
    sobrenome: 'Chaves',
    idade: 23,
    endereco:{
        quadra: 311,
        bairro: 'Asa Sul',
        numero: 607
    }
};

const { nome: pessoa1 = 'Não existe', sobrenome, endereco:{quadra: rua, numero,...resto}, endereco} = pessoa;
console.log(pessoa1, sobrenome, rua, numero, endereco, resto);