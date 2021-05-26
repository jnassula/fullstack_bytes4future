class Rectangulo {
    #altura
    #largura

    constructor(largura, altura){
        this.#largura = largura
        this.#altura = altura
    }

    get area(){
        return this.#largura * this.#altura
    }

//um ou Outro (get area/calculaArea())

    calculaArea(){
        return this.#largura * this.#altura
    }
}

class Quadrado extends Rectangulo {
    constructor(lado){
        super(lado, lado);
    }
}


console.log(new Rectangulo(2, 3).area)
console.log(new Rectangulo(2, 3).calculaArea())


console.log(new Quadrado(2).area)