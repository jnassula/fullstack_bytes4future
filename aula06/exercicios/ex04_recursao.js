//Implemente uma função recursiva Aplica que recebe um array e uma função e retorna um novo array resultante de aplicar  a função do array.

// function clone(array){
//     //Caso Simples
//     if(array.length === 0) return [];
//     //Caso Geral
//     return [array[0]].concat(clone(array.slice(1)))
// }

function aplica(array, transformation){
    if(array.length === 0) return []

    return [transformation(array[0])].concat(aplica(array.slice(1), transformation))
}


console.log(aplica([1, 2, 3, 4], (n) => n * n))