// function funcao(a, b, c){
//   let total = 0;
//   for (argumento of arguments){
//     total += argumento;
//   }

//   console.log(total);

// }

// funcao( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// function funcao(a, b = 2){
//   console.log(a + b);

// }

// funcao(2)


// function funcao({nome, sobrenome, idade}){
//   console.log(nome, sobrenome, idade);

// }

// funcao({nome: "Caio", sobrenome: "Chaves", idade: 23});

// function funcao([valor1, valor2, valor3]){
//   console.log(valor1, valor2, valor3);

// }

// funcao(['Caio', 'Chaves', 23]);


const conta = function(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '*') acumulador *= numero;
    if(operador === '/') acumulador /= numero;
  }

  console.log(acumulador);
};

conta('+', 30000, 20, 30, 40, 50);