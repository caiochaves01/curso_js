const numeroInserido = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numeroInserido;

const texto = document.getElementById('texto');

texto.innerHTML = '';
texto.innerHTML += `Dobro do número inserido: ${numeroInserido * 2}<br>`;
texto.innerHTML += `Raíz quadrada do número inserido: ${Math.sqrt(numeroInserido)}<br>`;