function arrayDeZeroaN(n){
    if(n < 0){
        return "Por favor, digite um numero superior a 0."
    }

    let i = 0;
    let resultado = [];
    while (i < n + 1){
        resultado.push(i)
        i++
    }
    return resultado;
}


console.log(arrayDeZeroaN(200))