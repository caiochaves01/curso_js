let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);

num1 += num2; // 0.799999...
num1 += num2; // 0.8999...
num1 += num2; // 0.9999...

// Resultado ainda impreciso
console.log(num1);
// Mostrando resultado aparentemente preciso
console.log(num1.toFixed(2));
// Porém ele não é um Integer de fato
console.log(Number.isInteger(num1));
// Transformando ele de fato em número preciso
// e inteiro (ex 1).
num1 = parseFloat(num1.toFixed(2));
console.log(num1);
// Verificando se ele é um Integer agora.
console.log(Number.isInteger(num1)); // true

console.log();

// Outra forma de transformar números imprecisos em precisos
let numero1 = 0.7;
let numero2 = 0.1;
console.log(numero1 + numero2);

let soma = ((numero1 * 100) + (numero2 * 100)) / 100;
console.log(soma);

// Concatenação, isNaN
let numeroFloat = 5.3;
let numeroString = '21';

let pseudoSoma = numeroFloat + numeroString;
console.log(pseudoSoma, typeof pseudoSoma);
// não é uma operação que retorne NaN, apesar de ser uma string
console.log(Number.isNaN(pseudoSoma)); 
// agora retornará um NaN true
console.log(Number.isNaN(10 * 'b'));
// teste => ele irá converter o 2 para um number
console.log(10 * '2');
console.log(Number.isNaN(10 * '2'));





