// Função Date é construtora
// const tresHoras = 60 * 60 * 3 * 1000; 
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp Unix ou época Unix

// const data = new Date(2019, 3, 20, 15,14,27, 500);

// const data = new Date('2019-04-20 20:20:59.666');
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1); // Mês começa do zero
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Minuto", data.getMinutes());
// console.log("Segundos", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(Date.now());
// console.log(data.toString());

function zeroAEsquerda(num){
    return  num >= 10 ? num : `0${num}`;
}

function formataData(data){
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);