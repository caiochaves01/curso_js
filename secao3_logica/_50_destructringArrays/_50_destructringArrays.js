// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = ['B', 'C', 'A'];
// console.log(a,b,c);

// [a,b,c] = letras;

// console.log(a,b,c);

// EXEMPLO #1
// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// const [pNum, , tNum, , qNum, , setNum, ...resto] = numeros;

// console.log(pNum, tNum, setNum);

// EXEMPLO #2
const numeros = [ 
        [1,2,3],
        [4,5,6],
        [7,8,9]
];

const [ ,[ , ,seis]] = numeros;
console.log(seis); 

// OU
const numeros2 = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const [lista1, lista2, lista3] = numeros2;
const [[ ], [ ], [ , , nove]] = numeros2;  // Pegando o 3º elemento da 3ª lista
console.log(nove);