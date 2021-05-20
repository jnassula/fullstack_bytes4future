/*
//CONTROLE DE FLUXO

//PAR, IMPAR OU ERRO
let n = 100
if (n === 10){
    console.log(n)
} else if (n % 2 === 0) {
    console.log('PAR')
} else if (n % 2 === 1){
    console.log('ÍMPAR')
} else {
    console.log('ERRO')
}


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')


//
function garanteComprimentoDaString(string, number){
    if (string.length > number){
        return string.length
    }
    return number
}

console.log(garanteComprimentoDaString('abcde', 6))
console.log(garanteComprimentoDaString('abc', 2))


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')


function calculaClassificacaoEtaria(idade){
    if (idade  >= 0 && idade < 2){
        return 'Latente'
    } 
    if (idade >= 2 && idade < 5){
        return 'Pré-escolar'
    } 
    if (idade >= 5 && idade < 11){
        return 'Escolar'
    }
    if (idade >= 11 && idade < 18){
        return 'Adolescente'
    }
    return '...'
}

console.log(calculaClassificacaoEtaria(2))
console.log(calculaClassificacaoEtaria(10))
console.log(calculaClassificacaoEtaria(15))
console.log(calculaClassificacaoEtaria(1))


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')


//SWITCH CASE
let numero = 10
switch (numero % 2){
    case 0: 
        console.log('par')
        break
    case 1: 
        console.log('impar')
        break
    default:
        console.log('error')
    }

console.log(numero)


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')

function mesesDoAno(mes){
    
    let resultado;

    switch (mes){
        case 1:
            resultado = 'Janeiro'
            break
        case 2:
            resultado = 'Fevereiro'
            break
        case 3:
            resultado = 'Março'
            break
        case 4:
            resultado = 'Abril'
            break
        case 5:
            resultado = 'Maio'
            break
        case 6:
            resultado = 'Junho'
            break
        case 7:
            resultado = 'Julho'
            break
        case 8:
            resultado = 'Agosto'
            break
        case 9:
            resultado = 'Setembro'
            break
        case 10: 
            resultado = 'Outubro'
            break
        case 11:
            resultado = 'Novembro'
            break
        case 12:
            resultado = 'Dezembro'
            break
        default:
            resultado = 'Mês Inválido!'
    }
    return resultado
}
console.log(mesesDoAno(1))

console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')

function mesesDoAnoAbreviados(mes){
    
    let resultado;

    switch (mes){
        case 'jan':
            resultado = 'Janeiro'
            break
        case 'fev':
            resultado = 'Fevereiro'
            break
        case 'mar':
            resultado = 'Março'
            break
        case 'abr':
            resultado = 'Abril'
            break
        case 'mai':
            resultado = 'Maio'
            break
        case 'jun':
            resultado = 'Junho'
            break
        case 'jul':
            resultado = 'Julho'
            break
        case 'ago':
            resultado = 'Agosto'
            break
        case 'set':
            resultado = 'Setembro'
            break
        case 'out': 
            resultado = 'Outubro'
            break
        case 'nov':
            resultado = 'Novembro'
            break
        case 'dez':
            resultado = 'Dezembro'
            break
        default:
            resultado = 'Mês Inválido!'
    }
    return resultado
}
console.log(mesesDoAnoAbreviados('dez'))

console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')


//CICLOS
//while
let i = 0
while(i < 10){
    console.log(i)
    i++
}
console.log(i)

console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')

//do while
i = 0
do {
    console.log(i)
    i++
    
}
while(i < 10)
    console.log(i)

console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')


//while dentro do while
let r = 0
while(r < 3){
    let p = 0
    while (p < 3){
        console.log(p)
        p++
    }
    console.log(p)
    r++
}


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')

function escadaComCardinais(dim){
    let resultado = "";
    for (let i = 0; i < dim; i++){
        const numEspacos = dim - i - 1;
        const numCardinais = dim - numEspacos;
        
        for (let j = 0; j < numEspacos; j++){
            resultado += "-"
        }
        for (let j = 0; j < numCardinais; j++){
            resultado += '#'
        }
        resultado = resultado + (i < dim - 1 ? "\n" : "")

    }
    return resultado;
}

console.log(escadaComCardinais(8))


console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------\n')

function escadaComCardinaisInvertida(dim){
    let resultado = "";
    for (let i = 0; i < dim; i++){
        const numEspacos = dim - i - 1;
        const numCardinais = dim - numEspacos;

        if(i > 0){
            resultado += '\n'
        }
        
        for (let j = 0; j < numCardinais; j++){
            resultado += '#'
        }
        for (let j = 0; j < numEspacos; j++){
            resultado += "-"
        }
        
        //resultado = resultado + (i < dim - 1 ? "\n" : "") essa linha é a mesma que o if da linha 267, mas o local delas precisa ser diferente
        

    }
    return resultado;
}

console.log(escadaComCardinaisInvertida(8))


class Cat {
    constructor(name, weigth, maxJumpHeigth){
        this.name = name;
        this.weigth = weigth;
        this.maxJumpHeigth = maxJumpHeigth;
        this.verticalPosition = 0;
    }

    jump(power){
        return this.verticalPosition += this.maxJumpHeigth * power
    }

}
const cat = new Cat("Bichano", 6.5, 100);
console.log(cat.verticalPosition)


//name_obj . method(value)
cat.jump(.2)
console.log(cat.verticalPosition)




function aplica(n, f){  //function aplicaarrow(n, f) => f(n)    a forma da mesma função como arrow fuction
    return  f(n)
}

console.log(aplica(5, (n) =>  n * n))

console.log(aplica(5, (n) =>  n * -1))

console.log(aplica(5, (n) =>  n % 2 === 0 ? "par" : "impar"))

*/

// function superDigito(n){
//     if(n.length === 1){
//         return parseInt(n)
//     }

//     let soma = 0
//     for (let i = 0; i < n.length; i++){
//         soma += parseInt(n[i])
//     }
    
//     return superDigito(soma.toString())
// }

// function somatorio(n){
//     if(n.length === 1){
//         return parseInt(n[0])
//     }
//     return parseInt(n[0]) + somatorio(n.slice[1])
// }
// console.log(superDigito('9875'))

// console.log(superDigito('12'))

// console.log(superDigito('2'))


//----------------------------------------

// function superDigito(n, k) {
//     if (k > 1) {
//         // let resultado = "";
//         // for (let i = 0; i < k; i++) {
//         //     resultado += n;
//         // }
//         // console.log(resultado)
//         // return superDigito(resultado, 1);

//         return superDigito(
//             (somatorio(n) * BigInt(k))
//             .toString(),
//             1
//         );
//     }
//     if (n.length === 1) {
//         return BigInt(n);
//     }
//     return superDigito(somatorio(n).toString(), 1)
// }

// function somatorio(n) {
//     if (n.length === 1) {
//         return BigInt(n);
//     }
//     return BigInt(n[0]) 
//         + somatorio(n.slice(1))
// }


// console.log(superDigito('9875', 4))
// console.log(superDigito('9875', 123123123123123123))
// console.log(superDigito('9875', 123123123123123123123123123))

//------------------------------------------------------

// function minMax(array, n){
//     let min = 0;
//     for (let i = 0; i < n; i++){
//         min += array[i];
//     }

//     let max = 0
//     for (let i = 0; i < n; i++){
//         max += array[array.length -1 - i];
//     }

//     return [min, max];
// }

// console.log(minMax([1, 2, 3, 4, 5], 4))
// console.log(minMax([1, 2, 3, 4, 5], 2))


//----------------------------------------------------------

function somaDiagonalPricipal(matriz){
    let soma = 0;
    for (let i = 0; i < matriz.length; i++){
        soma += matriz[i][i];
    }
    return soma;
}

function somaDiagonalSecundaria(matriz){
    let soma = 0;
    for (let i = 0; i < matriz.length; i++){
        soma += matriz[matriz.length - 1 - i][i]
    }
    return soma;
}

function diferencaDiagonal(matriz){
    const diff = somaDiagonalPricipal(matriz) - somaDiagonalSecundaria(matriz)
    if (diff < 0){
        return diff * -1;
    }
    return diff;
}

console.log(diferencaDiagonal(
    [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 7]
    ]
))
