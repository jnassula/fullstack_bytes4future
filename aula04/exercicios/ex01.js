/*
    Cria uma classe 
*/

class Inteiro {
    static get nulo() {return 0};

    static eInteiro(n) {
        return Number.isInteger(n)
    }
}

console.log(Inteiro.nulo)

console.log(Inteiro.eInteiro(1))
console.log(Inteiro.eInteiro(111))
console.log(Inteiro.eInteiro(0.115))