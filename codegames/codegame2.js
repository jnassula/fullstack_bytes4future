//Cria uma função que recebe como argumento um número e retorna a soma de todos os quadrados de um até ao número inclusivé.


function somaQuadradosAteN(n){
    // escreve aqui a função
    let soma = 0
    for (let i = 0; i <= n; i++){
        soma += i ** 2
    
    }
    return soma
}

console.log(somaQuadradosAteN(3))