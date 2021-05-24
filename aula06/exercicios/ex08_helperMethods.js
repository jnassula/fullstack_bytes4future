//Crie uma função que retorna TRUE se todos os elementos do array forem pares.
function todosPares(array){
    return array.every((element) => element %  2 === 0);
}

console.log(todosPares([2, 4, 6]))
console.log(todosPares([1, 2, 3]))