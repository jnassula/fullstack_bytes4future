//Implemente uma função Soma que recebe um array e retorna a soma dos elementos do array.

function soma(array){
    //Caso Simples 
    if(array.length === 0) return 0;
    //Caso Geral
    return array[0] + soma(array.slice(1))
}


console.log(soma([1, 2, 3]))
console.log(soma([]))
console.log(soma([1, -1]))