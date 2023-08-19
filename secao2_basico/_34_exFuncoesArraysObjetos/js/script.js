function meuEscopo(){
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     console.log('evento bloqueado');
    //     alert(1)
    // };

    let contador = 0;

    function recebeEventoForm(evento){
        evento.preventDefault();
        // console.log(`Form foi enviado: ${contador}`);
        // contador++;
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // console.log(nome.value, sobrenome.value, peso.value, altura.value);
        
        // document.innerHTML = `<p>Pessoa ${contador + 1}: ${pessoas[contador].nome}</p>`;

        // pessoas.push(contador); ISSO FUNCIONA
        // console.log(pessoas);

        // document.write += `pessoa ${contador + 1}: ${pessoas[contador]}`;
        pessoas.push({nome:nome.value, sobrenome: sobrenome.value, peso: peso.value,altura: altura.value});
        console.log(pessoas);

        resultado.innerHTML += `<p>Pessoa ${contador + 1}: ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
        contador++;

        // document.body.innerHTML += `<p>Pessoa ${contador + 1}: ${pessoas[contador].nome.value}</p>`;
       


        
    }

    
    

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();