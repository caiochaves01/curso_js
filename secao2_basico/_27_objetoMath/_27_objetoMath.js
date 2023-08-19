let num1 = 8.492;
let num2 = 1.89;

// Divisão por 0 resolve Infinity
let infinito = 7 / 0;
console.log(infinito);

console.log();

// Mínimo e Máximo
console.log(Math.max(1,3,4,5,100,-12,19.55,100.1));
console.log(Math.min(-102.11,3,5,-102.01));

console.log();

console.log(Math.ceil(num1)); // 9
console.log(Math.floor(num2)); // 1

console.log();

console.log(Math.round(num1)); // 8
console.log(Math.round(num2)); // 2

console.log();

let numAleatorio = Math.random();
console.log(numAleatorio);

// Número aleatório entre 1 e 7
numAleatorio = Math.random() * (7 - 1) + 1;
console.log(numAleatorio);

console.log();

// Potenciação
let num4 = Math.pow(2,10);
console.log(num4);
// ou
num4 = 2 ** 5;
console.log(num4);

console.log();

// Radiciação
let num5 = Math.sqrt(25);
console.log(num5);

console.log();
// ou
num5 = 16 ** (1/2);
console.log(num5);

console.log();

// ou ainda
num5 = 81 ** (0.5);
console.log(num5);

console.log();

// PI
console.log(Math.PI);
