class Fila {
    #elementos = []

    toString() {
        return this.#elementos.toString()
    }

    insere(dados) {
        this.#elementos = this.#elementos.concat(dados)
    }

    remove() {
        const [incio, ...resto] = this.#elementos;
        if (!incio) { return undefined; }
        this.#elementos = resto;
        return incio;
    }

    get eVazia() {
        return this.#elementos.length === 0;
    }
}

const fila = new Fila();
fila.insere(1);
fila.insere(3);
fila.insere(6);
console.log(fila.remove())
console.log(fila.remove())
console.log(fila.remove())
console.log(fila.remove())