//Inverter array com recursão
function inverterArray(array){
    //Caso Simples
    if(array.length === 0) return [];

    //Caso Geral
    return inverterArray(array.slice(1)).concat(array[0])
}




console.log(inverterArray([]))
console.log(inverterArray([1]))
console.log(inverterArray([1, 2, 3]))  //[3, 2, 1]