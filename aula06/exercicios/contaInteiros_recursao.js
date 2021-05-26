function contaInteirosDoArray(array){
    // escreve aqui a função
    if(array.length === 0) {return 0}
    if(Number.isInteger(array[0])){return 1 + contaInteirosDoArray(array.slice(1))} else {return contaInteirosDoArray(array.slice(1))}
}


console.log(contaInteirosDoArray([2, 3, 5.6, 4.3, 4, 5, 7.7, 1, 1.1]))