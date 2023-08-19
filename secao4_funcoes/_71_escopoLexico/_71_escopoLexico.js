const nome = 'Caio';

function falaNome(){
  console.log(nome);
}

function usaFalaNome(){
  const nome = 'Luiza';
  falaNome();
}

usaFalaNome();