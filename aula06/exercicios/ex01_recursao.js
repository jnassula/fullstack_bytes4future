function contaPares(array) {
    if(array.length === 0 ) return 0;
    if(array[0] % 2 === 1) return contaPares(array.slice(1));

    if(array[0] % 2 === 0) return 1 +  contaPares(array.slice(1));
}


console.log(contaPares([]))
console.log(contaPares([1]))
console.log(contaPares([2]))
console.log(contaPares([2, 1 , 1]))
console.log(contaPares([1, 4, 2, 6, 7, 9, 3]))