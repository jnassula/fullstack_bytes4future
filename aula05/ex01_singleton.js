class SingletonCalculadora {
    static #calculadora
    constructor() {
        if (SingletonCalculadora.#calculadora) {
            throw "Só pode existir uma instância...";
        }
        this.#historico = []
        SingletonCalculadora.#calculadora = this;
    }
    static get calculadora() {
        if (!SingletonCalculadora.#calculadora) {
            new SingletonCalculadora();
        }
        return SingletonCalculadora.#calculadora;
    }

    #historico
    somar(a, b) {
        const resultado = a + b;

        this.#historico
            .push(new Operacao(a, b, '+', resultado))

        return resultado;
    }

    subtrair(a, b) {
        const resultado = a - b;

        this.#historico
            .push(new Operacao(a, b, '-', resultado))

        return resultado;
    }

    multiplicar(a, b) {
        const resultado = a * b;

        this.#historico
            .push(new Operacao(a, b, '*', resultado))

        return resultado;
    }

    dividir(a, b) {
        const resultado = a / b;

        this.#historico
            .push(new Operacao(a, b, '/', resultado))

        return resultado;
    }

    imprimir() {
        for(const linha of this.#historico) {
            console.log(linha.toString());
        }
    }

    get ultimoResultado() {
        if (this.#historico.length === 0) return 0;
        return this.#historico[this.#historico.length - 1].resultado;
    }
}

// console.log(SingletonCalculadora.calculadora === SingletonCalculadora.calculadora)

class Operacao {
    #a
    #b
    #operacao
    #resultado
    constructor(a, b, operacao, resultado) {
        this.#a = a;
        this.#b = b;
        this.#operacao = operacao;
        this.#resultado = resultado;
    }

    toString() {
        return `${this.#a} ${this.#operacao} ${this.#b} = ${this.#resultado}`
    }

    get resultado() { return this.#resultado; }
}

SingletonCalculadora.calculadora.somar(1, 1);
console.log(SingletonCalculadora.calculadora.ultimoResultado)
SingletonCalculadora.calculadora.subtrair(2, 5);
SingletonCalculadora.calculadora.multiplicar(2, 3);
console.log(SingletonCalculadora.calculadora.ultimoResultado)
SingletonCalculadora.calculadora.dividir(4, 2);
SingletonCalculadora.calculadora.imprimir();
console.log(SingletonCalculadora.calculadora.ultimoResultado)