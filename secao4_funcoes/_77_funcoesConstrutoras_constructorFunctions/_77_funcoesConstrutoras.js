// Função construtora => objetos
// Função fábrica => objetos
// Construtora => Pessoa (new)


function Pessoa(nome, sobrenome){
  // atributos e métodos privados
  const ID = 12929;
  const metodoInterno = function(){

  };

  // atributos e métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function(){
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Caio', 'Chaves');
const p2 = new Pessoa('Luiza', 'Marinho');
console.log(p1.nome);
p1.metodo();
p2.metodo();


