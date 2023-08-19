function relogio(){
    // new Date(0);
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'GMT'
    });
}
// console.log(criaHoraDosSegundos(10));


const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target;
    console.log(el);

    if(el.classList.contains('zerar')){
        console.log('voce clicou em zerar');
        relogio.classList.remove('pausado');
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }

    if(el.classList.contains('iniciar')){
        console.log('voce clicou em zerar');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){
        console.log('voce clicou em pausou');
        relogio.classList.add('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('pausar')){
        console.log('voce clicou em pausar');
        relogio.classList.add('pausado');
        clearInterval(timer)
    }
    
})

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function(event){
    
})

zerar.addEventListener('click', function(event){
    
})
}

relogio();