const elementos = [{tag: 'p', texto: 'Frase 1'}, {tag: 'div', texto: "oi"}];

// let [{tag,  texto}, { tag1, texto1}] = elementos
// nao posso atribuir um literal na desestruturação 
// let [] = elementos; 

let i = 0;
const [primeiro, segundo] = elementos
// const {tag: elementosSeparados[0], texto: elementosSeparados[1]} = primeiro
const {tag:tag1,texto: texto1} = primeiro
console.log(tag1);


// let [{um}, {dois}] = elementos
// ({tag, texto} = elementos[i]);
// console.log(tag);


// for(let i = 0; i < elementos.length; i++){

// }



// ({tag: elementosSeparados[0], texto:elementosSeparados[1]} = obj1)
// console.log(elementosSeparados[0]);

// const [{[0,1]}, {[2,3]}] = elementos;

// const {tag, texto} = obj1
// let {tag:elementosSeparados[0], texto:elementosSeparados[1]} = elementos;
// console.log(obj1);
// ({tag: elementosSeparados[0], texto:elementosSeparados[1]} = obj1)

// console.log(elementosSeparados[0], elementosSeparados[1]);

// const [obj1, obj2] = elementos;
// const {tag:tag1, texto:texto1} = obj1;
// console.log(tag1);



// console.log(elementos[0].tag)
// FUNCIONA, MAS N EXATAMENTE COMO ELE QUER
// function criarElementos(){
    
//     for(let i = 0; i < elementos. length; i++){
//         const divContainer = document.getElementById("container");
//         const novoElemento = document.createElement(elementos[i].tag);
//         const texto = document.createTextNode(elementos[i].texto)
//         divContainer.appendChild(novoElemento)
//         novoElemento.appendChild(texto);

//     }
// }

// criarElementos();


