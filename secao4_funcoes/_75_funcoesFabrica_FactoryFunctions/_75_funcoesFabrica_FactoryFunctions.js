function criaPessoa(nome, sobrenome, a, p){
  return {
    nome,
     sobrenome,
     get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
     },
     set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
     },
     fala(assunto){
      return `${nome} está falando ${assunto}.`
     },
     altura: a, 
     peso: p,
     // Getter
     get imc(){
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
     }
     // Setter
     
  };
}

const p1 = criaPessoa("Caio", "Silva", 1.75, 80);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Maria Oliveira Chaves';
console.log(p1.nomeCompleto);
// console.log(p1.imc);
// console.log(p1.fala('sobre a lua'));

// const p2 = criaPessoa('Maria', 'Luiza', 1.6, 65);
// console.log(p2.imc);
// console.log(p2.fala());