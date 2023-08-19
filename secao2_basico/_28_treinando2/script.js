const numeroInserido = Number(prompt("Digite um número:"));

const numberoTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numberoTitulo.innerHTML = numeroInserido;

texto.innerHTML = '';
texto.innerHTML += `O valor inserido é um NaN? ${Number.isNaN(numeroInserido)}<br>`;
texto.innerHTML += `A raíz quadrada do número inserido é: ${numeroInserido ** 0.5}<br>`;
texto.innerHTML += `O número inserido é um Integer? ${Number.isInteger(numeroInserido)}<br>`;
texto.innerHTML += `Número inserido com 2 casas decimais: ${numeroInserido.toFixed(2)}<br>`;


