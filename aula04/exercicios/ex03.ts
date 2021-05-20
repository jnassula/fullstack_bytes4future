function insereNnoArray<T>(array: T[], elemento: T): T[]{
    return array.concat(elemento);
}


console.log(insereNnoArray([1, 2, 3], 4))