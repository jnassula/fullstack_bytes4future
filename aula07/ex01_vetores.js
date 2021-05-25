/* 
Implementa a função minimo que recebe um array 
de objetos e o nome de uma propriedade. A função 
deve retornar o objeto que tem o valor mínimo 
na propriedade.
*/

function minimo(array, propriedade){
    return array.reduce((minimo, elemento) => {
        if(elemento[propriedade] < minimo[propriedade]){
            return elemento;
        }
        return minimo;
    })
}

console.log(minimo([{valor: 1, nome: "a"}, {valor: -1, nome: "aa"}], "valor"))


function maximo(array, propriedade){
    return array.reduce((maximo, elemento) => {
        if(elemento[propriedade] > maximo[propriedade]){
            return elemento;
        }
        return maximo;
    })
}

console.log(maximo([{valor: 1, nome: "a"}, {valor: -1, nome: "aa"}], "valor"))