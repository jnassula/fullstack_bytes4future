/* Cria uma função que reduz um array de números 
para um Map que tem como chaves os valores do array 
e como valores o número de ocorrências da chave. */

function contaElementos(arr) {
    const contaElemento = (mapa, elemento) => {
        const contagem = mapa.has(elemento) 
            ? mapa.get(elemento) + 1
            : 1 
        return new Map([
            ...mapa.entries(),
            [elemento, contagem],
        ])
    }
    return arr.reduce(contaElemento, new Map())
}

console.log(contaElementos([1, 2, 1]))
// Map {
//   1 -> 2
//   2 -> 1
// }