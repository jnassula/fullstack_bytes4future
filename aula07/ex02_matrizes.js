/* 
Cria uma função eQuadrada que recebe uma matriz e retorna true se a matriz for quadrada.
*/

function eQuadrada(matriz){
   
    return matriz.every(linha => linha.length === matriz.length);
}

console.log(eQuadrada([
    [1, 2, 3],
    [1, 2]
]))

console.log(eQuadrada([
    [1, 2],
    [1, 2]
]))