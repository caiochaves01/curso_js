const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function mostrarTempoZero(){
    let tempo = new Date('January 1, 2000, 00:00:00');
    // const relogio = document.querySelector('.relogio');
    setTimeout(function(){
        clearInterval(tempo)
    })
    
    formatarHora(tempo);
    // relogio.innerHTML = horaZero;
   
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formatarHora(data){
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    const horaFormatada = `${hora}:${minutos}:${segundos}`;
    const texto = document.querySelector('.relogio');
    texto.innerHTML = horaFormatada;
    console.log(horaFormatada);
}



iniciar.addEventListener('click', function(event){
    alert('CLiquei no iniciar')
})

pausar.addEventListener('click', function(event){
    alert('CLiquei no pausar')
})

zerar.addEventListener('click', function(event){
    log(mostrarTempoZero());
})