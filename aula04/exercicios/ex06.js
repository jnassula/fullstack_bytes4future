//1. Calcular a soma da diagonal pricipal
//2. Calcular a soma da diagonal secundaria
//3. Calcular a diferença entre as diagonais
//4. Se a diferença for menor que 0
//      ENtão retorna a diferença * -1
//      Senão retorna a diferença 

function diferencaDiagonal(matriz){
    const somaPrincipal = somaDiagonalPrincipal(matriz);

    matriz.reverse();
    const somaPrincipal = somaDiagonalPrincipal(matriz);
    matriz.reverse();

    const diff = somaPrincipal - somaDiagonalPrincipal
    if(diff < 0){
        diff * -1;
        return diff
    }
    else {
        return diff
    }
    
}





















































































































