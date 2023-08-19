function retornaFuncao(nome){
  // const nome = 'Luiz';
  return function(){
    return nome;
  };
}

const funcao = retornaFuncao('Caio');
const funcao2 = retornaFuncao('Luiza');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());