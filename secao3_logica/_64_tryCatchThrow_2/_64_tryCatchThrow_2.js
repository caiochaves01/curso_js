let array = ['Nome', 'Idade', 'CEP'];

let obj = {
    nome: "Caio",
    idade: 23,
    casa: 607
};

let obj2 = {
    animal: 'Cachorro',
    idade: 8,
    raca: 'Maltes'
};

function isIterable(input) {  
    if (input === null || input === undefined) {
      return false
    }
  
    return typeof input[Symbol.iterator] === 'function'
  }

function desestruturarArrays(array){
    if(!isIterable(array)){
        throw new Error("Não é iterável");
    }
    for(let elemento of array){
        console.log(array[elemento]);
    }
}

try{
    desestruturarArrays(obj);
}catch(e){
    console.log(e);
}finally{
    console.log("FIM");
}

