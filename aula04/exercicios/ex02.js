class ContadorDeInstancias {
    static #instancias = 0; //propriedade estatica privada
    static get instancias() {return
    }
    constructor(){
        ContadorDeInstancias.#instancias++;
    }
}

console.log(ContadorDeInstancias.instancias)
new ContadorDeInstancias()