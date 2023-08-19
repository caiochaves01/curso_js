// return
// retorna um valor
// termina a função
// function soma(a, b){
//   return a + b;
// }

// console.log(soma(1, 4));

// function soma2(a, b){
//   console.log(a + b);
// }

// soma2(2, 5);

// function criaPessoa(nome, sobrenome){
//   return{ nome, sobrenome };
// }

// const p1 = criaPessoa('Caio', 'Chaves');
// const p2 = {
//   nome: 'João',
//   sobrenome: 'Oliveira'
// };

// console.log(p1);
// console.log(p2);


// function falaFrase(comeco){

//   function falaResto(resto){
//     return comeco + ' ' + resto;
//   }

//   return falaResto;

// }

// const fala = falaFrase('Olá');
// const resto = fala('Mundo!');
// console.log(resto);

function criaMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(5));