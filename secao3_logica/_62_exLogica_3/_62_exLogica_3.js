function exercicio3(numero){
    if(typeof(numero) !== 'number'){
        return numero;
    }

    if(numero < 0 || numero > 100){
        return "Digite um numero no range."
    }

    if(numero % 3 == 0 && numero % 5 == 0){
        return 'FizzBuzz';
    }

    if(numero % 3 == 0){
        return 'fizz';
    }

    if(numero % 5 == 0){
        return "Buzz";
    }

    return numero;
}

for(let i = 0; i <= 100; i++){
    console.log(i, "#", exercicio3(i));
}