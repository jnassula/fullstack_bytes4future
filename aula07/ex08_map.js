//Implementa a classe ParCahevValor que tem duas propriedades: chave e valor.

class ParChaveValor {
    #chave
    #valor
    constructor(chave, valor){
        this.#chave = chave;
        this.#valor = valor;
    }

    get chave() {
        return this.#chave
    }

    get valor() {
        return this.#valor
    }

    set valor(novoValor){
        this.#valor = novoValor;
    }

    toString(){
        return `(chave: ${this.#chave}, valor: ${this.#valor})`
    }
}

const par = new ParChaveValor(1, 6);
console.log(par.toString())