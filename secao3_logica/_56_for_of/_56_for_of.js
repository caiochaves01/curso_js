const nome = 'Caio Chaves';

for(let valor of nome){
    console.log(valor);
}

console.log("####");

const letras = ['a','b','c'];

for(let caractere of letras){
    console.log(caractere);
}

console.log("#####");

letras.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});