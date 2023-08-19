// Não tá funcionando sobrecarga de método
// function saudacao(nome){
//     console.log(`Olá ${nome}`);
// }

function saudacao(nome, genero){
    return `Olá ${nome}, você é ${genero}.`;
}

console.log(saudacao('Caio', 'Homem'));

const bomDia = function(){
    console.log(`Bom dia!`);
};

bomDia();

const numeroMaisDois = n => n + 2;
console.log(numeroMaisDois(3));

const resultado = function soma(x, y){
    return x + y;
}

console.log(resultado(2, 5));



