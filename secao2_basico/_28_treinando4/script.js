const numeroInserido = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numeroInserido;

const texto = document.getElementById('texto');
texto.innerHTML = '';
texto.innerHTML += `O dobro do número é ${numeroInserido * 2}<br>`;
texto.innerHTML += `A raíz quadrada do número é ${Math.sqrt(numeroInserido)}`;