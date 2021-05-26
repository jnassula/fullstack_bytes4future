//BOOLEAN
function umOuOutro(a, b){
    if ((a && !b) || (!a && b)){
        return true
    }else return false
    
} 
console.log(umOuOutro(true, true))
console.log(umOuOutro(false, true))
console.log(umOuOutro(true, false))
console.log(umOuOutro(false, false))

//NUMBER

//BIGINT
function umElevadoAoOutro(um, outro){
    return BigInt(um) ** BigInt(outro)
}

console.log(umElevadoAoOutro(2, 10))

//STRING
function insereLinhaEntre(primeiro, segundo){
    return primeiro + '\n' + segundo
}

console.log(insereLinhaEntre('Primeira Linha', 'Segunda Linha'))

function apresentaPessoa(nome, idade){
    return `O meu nome é ${nome} e tenho ${idade} anos.`
}
console.log(apresentaPessoa('Jonata', 29))

//SYMBOL
function criaSymbol(chave){
    return Symbol.for(chave)
}
console.log(criaSymbol('keyID'))



//OPERADORES DE COMPARAÇÃO
function comparaTexto(a, b){
    const aTexto = String(a)
    const bTexto = String(b)

    return aTexto > bTexto ? a : b;
}

console.log(comparaTexto(2, 10))


function comparaNumero(a, b){
    const aNumerico = Number(a)
    const bNumerico = Number(b)

    return aNumerico > bNumerico ? a : b;
}

console.log(comparaNumero(2, 10))