const paragrafos = document.querySelector('p');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

// com for in 
// const parag = document.querySelector('.paragrafos');
// const paragrafos = parag.querySelectorAll('p');
 
// const estilos = getComputedStyle(document.body); //Carrega os estilos do body
// const background = estilos.backgroundColor;
 
// for (let cor in paragrafos) {
//     paragrafos[cor].style.backgroundColor = background;
//     paragrafos[cor].style.color = 'white';
// }

// TENTATIVA FUNÇÃO
// function mudarCor(){
//     ps.
// }


// ERRADO
// const paragrafos2 = document.querySelectorAll('p');
// paragrafos2.style.backgroundColor = "gray";
