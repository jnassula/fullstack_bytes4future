function peloMenosUm(array){
    return array.some((element) => element %  2 === 0);
}

console.log(peloMenosUm([2, 4, 6]))
console.log(peloMenosUm([1, 2, 3]))