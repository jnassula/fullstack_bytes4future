/*
    Recorre a set para implementar uma função que recebe um array e retorna um array sem elementos repetidos.
*/ 

function removeDuplicados(array){
    return Array.from(new Set(array));
}

console.log(removeDuplicados([1, 1, 3, 4, 2, 3, 3]))



/*
    Implemente a mesma função, sem recorrer ao Set.
*/

function removeDuplicados2(arr){
    const resultados = [];
    // for(let i = 0; i < arr.length; i++){
    //     if (!resultados.includes(arr[i])){
    //         resultados.push(arr[i])
    //     }
    // }
    for(const elemento of arr){
        if(!resultados.includes(elemento)){
            resultados.push(elemento)
        }
    }
    return resultados;
}

console.log(removeDuplicados([1, 1, 3, 4, 2, 3, 3]))