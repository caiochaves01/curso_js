function saudacao(nome){
    console.log(`Olá ${nome}`);
}

console.log(saudacao('Caio'));

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 5);
console.log(resultado);

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const multi2 = n => n * 2;
console.log(multi2(2));

const divisao = (n, m) => n / m;
console.log(divisao(10, 2));

