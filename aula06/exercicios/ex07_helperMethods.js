// Cria uma função que mapeia cada elemento de um array de strings para a string invertida.

// A inversão de cada string deve ser implementada utilizando uma função recursiva.

function exercicio3(arr) {
    // return arr.map(e => inverteString(e))
    return arr.map(inverteString)
}

console.log(exercicio3(["abc", "def"]))
// ["cba", "fed"]

function inverteString(arr) {
    // Caso Simples
    if (arr.length === 0) return "" // arr
    // Caso Geral
    return inverteString(arr.slice(1)) + arr[0]
}

function inverteArray(arr) {
    // Caso Simples
    if (arr.length === 0) return [] // arr
    // Caso Geral
    return inverteArray(arr.slice(1))
        .concat(arr[0])
}
console.log(inverteArray(["abc", "def"]))

console.log(inverteString("abc"))