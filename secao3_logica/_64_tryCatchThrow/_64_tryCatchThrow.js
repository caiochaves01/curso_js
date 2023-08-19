const var1 = 12301;

const var2 = 'Caio Chaves';

function desestruturar(variavel){
    if(!isIterable(variavel)){
        throw new Error("Sua variável não é iterável");
    }
        for(let i = 0; i < variavel.length; i++){
            console.log(variavel[i]);
        }
    
        
    
}

try{
    desestruturar(var2);
    desestruturar(var1);
}catch(error){
    // console.log(error);
    console.log("Ocorreu um erro.");
}finally{
    console.log("Fim.");
}

function isIterable(variable){
    if(variable === null || variable === undefined){
        return false;
    }
    // retorna se a variavel passada é iterável ou não
    return typeof variable[Symbol.iterator] === 'function';
}

// console.log(isIterable('2334'));
// console.log(isIterable(123));
// console.log(isIterable(null));
// console.log(isIterable(undefined));