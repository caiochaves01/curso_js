// try{
//     console.log("abri um arquvio");
//     // console.log(a);
//     console.log("manipulei e gerou um erro");
//     console.log("fechei o arquivo");


//     try{
//         console.log(b);
//     }catch(e){
//         console.log("deu erro");
//     }finally{
//         console.log("outro finally");
//     }
// }catch(e){
//     console.log("tratando erro");
// }finally{
//     // executado sempre
//     console.log("SOU FINALIZADO SEMPRE");
// }


function retornaHora(data){
    // se data foi enviada e não é uma instância de Date
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date.");
    }

    // se não recebeu data, irá criar uma padrão
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });




}

try{
    const data = new Date('01-01-2019 12:00:21')
    const hora = retornaHora(data);
    
    console.log(hora);
    const dataInvalida = retornaHora(11);
    console.log(dataInvalida);
    
}catch(e){
    // console.log("erro");
    // console.log(e);
}finally{
    console.log("FIM");
}
