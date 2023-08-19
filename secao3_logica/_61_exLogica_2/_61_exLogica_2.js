ePaisagem(100, 20);
ePaisagem(100, 200);
ePaisagem(100, 100);
ePaisagem(100, -200);
ePaisagem(-100, -200);
ePaisagem(-100, 200);


function ePaisagem(largura, altura){
    if(typeof(largura) != 'number' || typeof(altura) != 'number'){
        console.log("Medidas inválidas");
        return;
    }

    if(largura <= 0 || altura <= 0){
        console.log("Medidas inválidas, digite acima de 0");
        return;
    }

    if(largura === altura){
        console.log("Imagem é quadrada");
        return;
    }

    const x =  largura > altura ? "Modo paisagem" : "Modo retrato";

    console.log(x);


}

const ehPaisagem = (largura, altura) => largura >= altura;

console.log(ehPaisagem(100, 50));
console.log(ehPaisagem(100, 150));