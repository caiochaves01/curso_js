const pontucaoUsuario = 999;
const nivelUsuario = pontucaoUsuario >= 1000 ? "Usuário VIP" :
"Usuário normal";

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preto';// Settando um valor padrão

console.log(nivelUsuario, corPadrao);

// if (pontucaoUsuario >= 1000){
//     console.log("Usuário VIP");
// }else{
//     // console.log("Usuário normal");
// }