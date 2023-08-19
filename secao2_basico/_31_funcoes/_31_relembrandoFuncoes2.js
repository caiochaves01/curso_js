// function boaNoite(){
//     console.log('Boa noite usuário');
// }

// boaNoite();

// function bomDia(nome){
//     console.log(`bom dia ${nome}`);
// }

// console.log(bomDia('Maria'));

// function bomDia(nome, tratamento){
//     return `Bom dia ${tratamento} ${nome}`;
// }

// console.log(bomDia("Caio", "Senhor"));

const somaPadrao = function(){
    console.log(1+1);
}

somaPadrao();

const multi = (n, m) => {return n * m}
console.log(multi(2,5));

function divisao(n, m = 1){
    const resultado = n / m;
    return resultado;
}

console.log(divisao(5,2));