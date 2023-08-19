const numero = 24;

if(numero >= 0){
    console.log("O número é positivo");
}else{
    console.log("O número é negativo");
}

if(numero >= 0 && numero <= 11){
    console.log("Bom dia");
}else if(numero >= 12 && numero < 18){
    console.log("Boa tarde");
}else if(numero >= 18 && numero <= 23){
    console.log("Boa noite");
}else{
    console.log("Olá");
}