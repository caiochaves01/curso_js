// const resultado = document.getElementById('resultado');

// const data = new Date();

// function formataZero(num){
//     return num >= 10 ? num : `0${num}`;
// };

// // DEU CERTO
// function diaSemanaFormatado(){
//     let diaSemana = data.getDay();
//     switch(diaSemana){
//         case 0: 
//             diaSemana = 'domingo';
//         // precisa desse return pra funcionar sem o clg();
//         return diaSemana; 
//         case 1:
//             diaSemana = 'segunda-feira';
//             return diaSemana;
//         case 2:
//             diaSemana = 'terça-feira';
//             return diaSemana;
//         case 3:
//             diaSemana = 'quarta-feira';
//             return diaSemana;
//         case 4:
//             diaSemana = 'quinta-feira';
//             return diaSemana;
//         case 5:
//             diaSemana = 'sexta-feira';
//             return diaSemana;
//         case 6:
//             diaSemana = 'sábado';
//             return diaSemana;
//         default:
//             return "Dia não válido";
//     }
// }

// // const diaDoAno = data.getDate(); NÃO DA CERTO ASSIM

// // ASSIM DA CERTO
// const anoDaData = function(){
//     return data.getFullYear();
// };

// const horasAno = function(){
//     return data.getHours();
// };

// const diaAnoRetorno = function(){
//     return data.getDate()
// }

// const diaAno = diaAnoRetorno();

// const ano = anoDaData();

// const diaSemana = diaSemanaFormatado();

// const horas = formataZero(horasAno());

// const minutos = formataZero(data.getMinutes());

// const mes = mesFormatado();

// // const mes = mesDoAno;

// // BOTANDO FUNCAO EM UMA FUNCAO ANONIMA ?
// // const horas = function () => {return data.getHours();};

// // NÃO CONSEGUI ATRUIBUIR À VARIÁVEL "mes" uma constante derivada da função "mesFormatado"
// function mesFormatado(){
//     let mesFormatado = data.getMonth();
//     switch(mesFormatado){
//         case 0:
//             return "janeiro";
//         case 1:
//             return "fevereiro";
//         case 2:
//             return "março";
//         case 3:
//             return "abril";
//         case 4:
//             return "maio";
//         case 5:
//             return "junho";
//         case 6:
//             return "julho";
//         case 7:
//             return "agosto";
//         case 8:
//             return "setembro";
//         case 9:
//             return "outubro";
//         case 10:
//             return "novembro";
//         case 11:
//             return "dezembro";
//         default:
//             return "Mês não encontrado";
//     }
// }

// function dataFormatada(){
//     resultado.innerHTML = `${diaSemana}, ${diaAno} de ${mes} de ${ano}<br>${horas}:${minutos}`;
// }

// console.log(dataFormatada());

const h1 = document.querySelector(".container h1");
const data = new Date();


h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});