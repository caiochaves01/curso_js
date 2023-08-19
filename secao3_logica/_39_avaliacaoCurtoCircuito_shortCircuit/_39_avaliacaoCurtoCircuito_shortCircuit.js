// Retorna o último valor verdadeiro quando
// se trata do operador AND
const verdadeira1 = 'Caio' && 'Maria' && 1;
// Vai percorrer todos os valores para ver
// se a operação realmente retorna o verdadeiro,
// por isso retorna o último valor verdadeiro.

// A prioridade da operação AND é achar um falso, 
// caso ache, irá retorná-lo
console.log(verdadeira1);

// Retorna o primeiro valor verdadeiro
// caso se use o operador OR com
// mais de um valor verdadeiro
const verdadeira2 = 'Caio' || 'Maria' || false;
// Como ele já achou um verdadeiro, irá retorná-lo
// pois ele é a prioridade neste caso do OR
console.log(verdadeira2);

// Retorna o ultimo valor falso quando se usa
// OR com todos os valores avaliados em falso
// Retorna uma string vazia
const falsa1 = 0 || !true || '';
// Vai percorrer todos os valores tentando
// achar um verdadeiro, como não achou, retorna 
// o último falso
console.log(falsa1);

// Como não achou todos os valores verdadeiros
// irá retornar falso, pois ele é a prioridade
// nesse tipo de operação
const falsa2 = true && 1 && 'caio' && 0;
console.log(falsa2);