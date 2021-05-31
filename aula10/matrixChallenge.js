class Ponto {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
    }
}

function contaGrupos(matriz) {
    // Inicializar dois arrays, um para os grupos de 0, outro para os grupos de 1
    let gruposUm = []
    let gruposZero = []
    // Para cada elemento da matriz
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
    //      Criar o Ponto
        const ponto = new Ponto(i, j);
        const elemento = matriz[i][j];
    //      Se for um 0
    //          Verifica se pertence a um grupo existente
    //              Se existir, então coloca o Ponto, no grupo
    //          Caso contrário
    //              Cria um novo grupo com o ponto
    //      Se for um 1
    //          Verifica se pertence a um grupo existente
    //              Se existir, então coloca o Ponto, no grupo
    //          Caso contrário
    //              Cria um novo grupo com o ponto
        }
    }
    // return [tamanho do array que tem os grupos de 0, tamanho do array que tem os grupos de 1]
}

function verificaSePertence(grupo, ponto) {
    return grupo.some(p => (p.linha === ponto.linha && p.coluna === p.coluna - 1)
    || (p.linha === p.linha - 1 && p.coluna === p.coluna))
}

const grupo = [new Ponto(0, 0)]
console.log(verificaSePertence(grupo, new Ponto(1, 0)))