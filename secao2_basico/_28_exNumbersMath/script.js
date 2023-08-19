const numeroInserido = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('raiz-quadrada');

const numero = document.getElementById('numero');
const ehInteiro = document.getElementById('eh-inteiro');
const ehNaN = document.getElementById('eh-nan');
const numeroFloor = document.getElementById('numero-floor');
const numeroCeil = document.getElementById('numero-ceil');
const numeroDuasCasas = document.getElementById('numero-duas-casas');

numeroTitulo.innerHTML = numeroInserido;
raizQuadrada.innerHTML = Math.sqrt(numeroInserido);
numero.innerHTML = numeroInserido;
ehInteiro.innerHTML = Number.isInteger(numeroInserido);
ehNaN.innerHTML = Number.isNaN(numeroInserido);
numeroFloor.innerHTML = Math.floor(numeroInserido);
numeroCeil.innerHTML = Math.ceil(numeroInserido);
numeroDuasCasas.innerHTML = `<p>Número '${numeroInserido}' com 2 casas decimais: ${numeroInserido.toFixed(2)}</p>`;
