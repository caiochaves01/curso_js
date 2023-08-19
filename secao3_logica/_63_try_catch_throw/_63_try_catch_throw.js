
function soma(x, y){
    if(
        (typeof x !== 'number' ||
        typeof y !== 'number')
       
    ){
        throw new Error("As variáveis precisam ser números");
    }

    console.log(x+y);
    
}

try{
    soma(1, 3);
    soma(1,null);
    soma(1,2); // n executa, pois houve um erro
}catch(e){
    // console.log(e);
    console.log("Fim. Erro.");
}