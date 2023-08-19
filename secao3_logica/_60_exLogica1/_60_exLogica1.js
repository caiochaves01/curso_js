function maiorNumero(a, b){
    let primeiroNumero = typeof(a);
    let segundoNumero = typeof(b);

 

    if(primeiroNumero !== 'number' || segundoNumero !== 'number'){
        console.log("Digite apenas numeros");
        return;
    }

    if(a > b){
        console.log(a);
    }else{
        console.log(b);
    }
}

maiorNumero(33,'oi');

const max = (x, y) => x > y ? x : y;
console.log(max(1,-2));