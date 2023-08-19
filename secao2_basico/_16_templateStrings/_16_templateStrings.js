let nome = "Caio";
let idade = 23;
let dataNascimento = 2023 - 23;
let alturaEmM = 1.75;
let peso = 75;
const imc = peso / Math.pow(2, alturaEmM);

console.log(nome, 'tem', alturaEmM, 'de altura(metros), pesa', peso);
console.log("nasceu em", dataNascimento);
console.log("e tem IMC igual a", imc);

console.log(`${nome} tem ${idade} anos de idade, nasceu em ${dataNascimento},`);
console.log(`tem ${alturaEmM} em metros, pesa ${peso}, e IMC igual a ${imc}`);