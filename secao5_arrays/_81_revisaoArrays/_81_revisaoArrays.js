// Valor por referência
const nomes = ['Caio', 'Chaves', 'Silva'];
// String, Objetos, Funções, Números
// const nomes = new Array('Caio', 'Chaves', 'Silva');
nomes[2] = 'Costa';
delete nomes[2];
console.log(nomes);