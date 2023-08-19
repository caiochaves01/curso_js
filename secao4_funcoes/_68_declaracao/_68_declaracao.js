// Function Hoisting

falaOi();
function falaOi(){
  console.log("Oi");
}

// First-class Objects(Objetos de Primeira Classe)
// Function Expression
const souUmDado = function(){
  console.log("Sou um dado");
};

souUmDado();

// function executaFuncao(funcao){
//   funcao();
// }

// executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();

// setInterval(function(){

// }, 1000);

// Dentro de um objeto
const obj = {
  falar(){
    console.log("Falando");
  }
}


obj.falar();