class SoInteiro {
    #inteiro

    constructor(num){
        this.inteiro = num;
    }

    get inteiro() {
        return this.#inteiro;
    }

    set inteiro(num){
        if (Number.isInteger(num)){
            this.#inteiro = num;

        }else if (!Number.isNaN(Number(num))){
            this.#inteiro = Math.round(num);
        
        }else if(!this.#inteiro){
            this.#inteiro = 0;
        }
    }
}

const si = new SoInteiro(1)
console.log(si.inteiro)
si.inteiro = 3
console.log(si.inteiro)
si.inteiro = 'a'
