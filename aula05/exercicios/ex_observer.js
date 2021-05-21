class Stock {
    // ...
    #users
    #valor

    constructor() {
        this.#user = [];
        this.#valor = valor;
    }

    addUser(user){
        this.#users.push(user)
    }

    updateValue(valor){
        const diffPercentual = Math.abs(this.#valor - valor) / this.#valor

        this.#valor = valor;
        if(diffPercentual > 0.01){
            for(const user of this.#users){
                user.notify(valor);
            }
        }
    }

}

class User {
    notify(valor){
        console.log(`Agora o valor é ${valor}`)
    }
}

const stock = new Stock(100);
const user = new User();
stock.updateValue(0)