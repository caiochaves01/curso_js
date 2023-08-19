const numeroInserido = Number(prompt("Insira um número:"))
const numeroTitulo = document.getElementById('numero-inserido');

let texto = document.getElementById('texto');

numeroTitulo.innerHTML = numeroInserido;

texto.innerHTML = '';

texto.innerHTML += `O dobro do seu número é: ${numeroInserido * 2}<br>`;
texto.innerHTML += `É um NaN? ${Number.isNaN(numeroInserido)}<br>`;
texto.innerHTML += `Raíz quadrada do número: ${Math.sqrt(numeroInserido)}<br>`;
texto.innerHTML += `É um inteiro? ${Number.isInteger(numeroInserido)}<br>`;
