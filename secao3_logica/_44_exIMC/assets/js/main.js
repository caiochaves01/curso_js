


function minhaFuncao(){
    const form = document.querySelector('form');
    const resultado = document.querySelector('#resultado');

    function amarelo(){
        document.getElementById("resultado").style.backgroundColor = "#fdff82";
        document.getElementById("resultado").style.textAlign = "center";
        document.getElementById("resultado").style.padding = "5px";
    }

    function vermelho(){
        document.getElementById("resultado").style.backgroundColor = "#eb5c5c";
        document.getElementById("resultado").style.textAlign = "center";
        document.getElementById("resultado").style.padding = "5px";
    }

    function verde(){
        document.getElementById("resultado").style.backgroundColor = "#97ff82";
        document.getElementById("resultado").style.textAlign = "center";
        document.getElementById("resultado").style.padding = "5px";
    }

    function trocaCor(cor, align, padding){
        document.getElementById("resultado").style.backgroundColor = cor;
        document.getElementById("resultado").style.textAlign = align;
        document.getElementById("resultado").style.textAlign = padding;
    }

    function recebeEventoForm(evento){
        evento.preventDefault();

        
        let peso = Number.parseFloat(form.querySelector('.peso').value);
        let altura = Number.parseFloat(form.querySelector('.altura').value);
        let imc = peso / (altura * altura);

        if(peso <= 0 && altura <= 0){
            resultado.innerHTML = `<p>Peso e altura inválidos</p>`;
            vermelho();
            return 0;
        }
        
        if(peso <= 0){
            resultado.innerHTML = `<p>Peso inválido</p>`;
            vermelho();
            return 0;
        }

        if(altura <= 0){
            resultado.innerHTML = `<p>Altura inválida</p>`;
            vermelho();
            return 0;
        }

        resultado.innerHTML = `<p>Seu IMC é igual a ${imc.toFixed(2)}`;

        console.log(peso, altura);
        console.log(imc);
        
        if(imc < 18.5){
            resultado.innerHTML += `<p>Resultado: Abaixo do peso`;
            vermelho();
            return 0;
        }

        if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML += `<p>Resultado: Normal`;
            verde();
        }

        if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML += `<p>Resultado: Acima do peso</p>`;
            amarelo();
        }

        if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML += `<p>Resultado: Obesidade grau 1`;
            amarelo();
        }

        if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML += `<p>Resultado: Obesidade grau 2`;
            vermelho();
        }

        if(imc >= 40){
            resultado.innerHTML += `<p>Resultado: Obesidade grau 2`;
            vermelho();
        }
    }/* fim recebeEventoForm */
    
    form.addEventListener('submit', recebeEventoForm);
}

minhaFuncao();

