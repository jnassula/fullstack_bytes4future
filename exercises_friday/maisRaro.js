// Encontra a moda de um Array de números, recorrendo a um Map.

// Se dois elementos tiverem o maior número de ocorrências, retorna o menor.

function maisRaro(array) {
    const contadores = new Map();
    for (const elem of array) {
        if (!contadores.has(elem)) {
            contadores.set(elem, 0);
        }
        contadores.set(elem, contadores.get(elem) + 1);
    }

    console.log(contadores.entries())
    let maisRaro = array[0];
    let contagemMenosVezes = contadores.get(maisRaro);
    for (const par of contadores.entries()) {
        const numero = par[0];
        const contagem = par[1];
        
        if (contagem < contagemMenosVezes
            || (contagem === contagemMenosVezes && numero < maisRaro)) {
                maisRaro = numero;
                contagemMenosVezes = contagem;
            }
    }
    return maisRaro;
}

const arr = [6, 6, 3, 6, 5, 2, 6, 2, 4, 3, 1, 2, 1]
console.log(maisRaro(arr))