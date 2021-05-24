//Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.



function filtra(array){
    const predicado = (element) => element % 2 === 0;   
    const elementFilter = array.filter(predicado)
    console.log(elementFilter)
    const elementMap = elementFilter.map((element) => element * element)
    console.log(elementMap)
    return elementMap.reduce((accumulated, sum) => accumulated + sum)
    
    // function filtra(array){
    //     predicado = (element) => element % 2 === 0;
    //     return array.filter(predicado)
    //             .map((element) => element * element)
    //             .reduce((accumulated, sum) => accumulated + sum)

    //Outra forma de fazer o exercicio!
}

console.log(filtra([1, 2, 3, 4]))