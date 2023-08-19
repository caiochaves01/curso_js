const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];


const container = document.querySelector('#container');
const div = document.createElement("div");

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada)
    
}
container.appendChild(div)

// tagsselecionados = [];
// textosselecionados = [];

// console.log(elementos[0]);
// ({tag: tagsselecionados[0], texto: textosselecionados[0]} = elementos[0])
// console.log(elementos[0]);
console.log(tagsselecionados[0]);

