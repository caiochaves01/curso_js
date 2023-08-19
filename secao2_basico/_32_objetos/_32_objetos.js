//  Factory Function
function criarPessoa(nome, idade, sexo){
    // nome: nome;
    // idade: idade;
    // sexo: sexo;
    // falar(nome){
    //     console.log(`Meu nome é ${nome}`);
    // }

    return {
        nome: nome,
        idade: idade,
        sexo: sexo
    };
};

const pessoa1 = criarPessoa('Caio', 23, 'M');
const pessoa2 = criarPessoa('Maria', 29, 'F');

console.log(pessoa1.nome);
console.log(pessoa2.sexo);

const caio = {
    nome: 'Caio',
    idade: 23, 
    sexo: 'M',
    
    falarBordao(){
        return `Vai tomar no cuuu!`;
    }
};

console.log(caio.nome, caio.idade, caio.sexo);
console.log(caio.falarBordao());

// // Array
// const itens = [ 1, 2, 3, 4 ];

// // Objetos
// const pessoa1 = {
//     nome: 'Caio',
//     sobrenome: 'Chaves',
//     idade: 23
// };

// const pessoa2 = {
//     nome: 'Mariana',
//     sobrenome: 'Milhomem',
//     idade: 22
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);
// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);