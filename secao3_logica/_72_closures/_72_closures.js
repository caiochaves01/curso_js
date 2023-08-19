function falarNome(){
    let nome = 'Caio';
    return function(){
        nome;
    }
}

const nome = falarNome();
console.log(nome());