/* 
Cria uma função obtemDiagonais que recebe uma 
matriz e retorna um array com as diagonais da matriz.
*/

function obtemDiagonais(matriz) {
    // Obtem diagonal principal
    let diagonais = [
        diagonalPrincipal(matriz, 0, 0)
    ]

    for (let i = 1; i < matriz.length; i++) {
        diagonais = [
            diagonalPrincipal(matriz, i, 0)
        ]
            .concat(diagonais)
            .concat([
                diagonalPrincipal(matriz, 0, i)
            ])
    }

    return diagonais;
}

function diagonalPrincipal(matriz, linha, coluna) {
    const diagonal = []
    for(let i = 0; i < matriz.length - linha; i++) {
        const elemento = matriz[linha + i][coluna + i];
        if (elemento) {
            diagonal.push(elemento)
        }
    }
    return diagonal
} 



console.log(obtemDiagonais([
    [1, 2, 3],
    [1, 2]
]))


console.log(obtemDiagonais([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

console.log(obtemDiagonais([
    [1, 2],
    [1, 2]
]))