// Immediately invoked function expression
(function(idade, peso, altura) {
  const sobrenome = 'Chaves';
  function criaNome(nome){
    return nome + ' ' + sobrenome;
  }

  function falaNome(){
    console.log(criaNome('Caio'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 75, 1.75);

const nome = "outro nome"

