function minMax(array, n){
    array.sort();
    let min = somaPrimeirosNumerosDOArray(array, n);

    array.reverse();
    let max = somaPrimeirosNumerosDOArray(array, n);

    return [min, max]
}

function somaPrimeirosNumerosDOArray(array, n){
    let result = 0;
    for(let i = 0; i < n; i++){
        result += array[i];
    }

    return result;
}


console.log(minMax([1, 3, 4, 2, 5, 3, 6, 7], 3))