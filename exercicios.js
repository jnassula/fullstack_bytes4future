function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função
    if( valor1 === valor2){
        return "Por favor introduza dois valores diferentes."
    }
    let count = 0;
    for (let i = valor1; i <= valor2; i++){
        if(valor1 % 2 === 0){
            count++
        }
    }
   
    return count 
}

console.log(contaParesEntreDoisValores(2, 6))