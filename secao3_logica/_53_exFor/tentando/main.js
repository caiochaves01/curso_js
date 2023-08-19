// document.body.onload = criarElemento();

const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// console.log(elementos [{tag:0, texto:0}]); n funciona


[
    {tag:tag1, texto: texto1},
    {tag: tag2, texto: texto2},
    {tag: tag3, texto: texto3},
    {tag: tag4, texto: texto4}
    ] = elementos

    

    



    // console.log(tag1);


function criarElemento(){
    let i = 0
    
    let elementos = [
        {tag:'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    for(i; i <elementos.length; i ++){
        console.log({tag:tag[i], texto: texto[i]});
    }

    // const divContainer = document.getElementById("container");
    // const novoElemento = document.createElement({tag:tag[i]});
    // divContainer.appendChild(novoElemento);
    // const inserirTexto = document.createTextNode({texto: texto[i]});
    // novoElemento.appendChild(inserirTexto);


    console.log(inserirTexto);
    // const divContainer = document.getElementById("container");
    // document.body.insertBefore(divContainer, novoElemento);
}

criarElemento();

