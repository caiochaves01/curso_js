let a = 'Caio';
let b = a;
console.log(a, b);
a = 'Luiza';
console.log(a, b);

let array1 = [1,2,3,4];
let array2 = array1;

console.log(array1, array2);

array1.push(111);
console.log(array1, array2);

array2 = [...array1];
console.log(array1, array2);
array1.push(919);
console.log(array1, array2);

let obj1 = {
    nome: 'Caio', 
    idade: 19
}

let obj2 = obj1;

console.log(obj1, obj2);
obj1.nome = 'Karlos';
console.log(obj1,obj2);

obj2 = {...obj1};
obj1.idade = 101;
console.log(obj1, obj2);