/* Cria uma função que mapeia cada elemento de um array 
de objetos com as propriedades name e birthday para um 
objeto que além destas propriedades, tem a propriedade age. */

function mapeiaArrayDeObjetos(array){
    return array.map(e => ({
        ...e,
        age: calculaIdade(e.birthday)
    }))
}


console.log(mapeiaArrayDeObjetos([
    {name: "a", birthday: new Date("2001-01-01")},
    {name: "b", birthday: new Date("2005-01-01")}
]))


function calculaIdade(data){
    return Math.floor((new Date() - data) / (365 * 24 * 7 * 60 * 60 * 1000))
}