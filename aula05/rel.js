class Utilizador {
    // Dados do Utilizador
}

class Estudante {
    #utilizador
    #exerciciosResolvidos
    #amigos
    constructor(utilizador) {
        this.#utilizador = utilizador
        this.#exerciciosResolvidos = []
        this.#amigos = []
    }

    adicionaExercicio(exercicioResolvido) {
        this.#exerciciosResolvidos.push(exercicioResolvido)
    }

    adicionaAmigo(estudante) {
        this.#amigos.push(estudante)
    }
}

class ExercicioResolvido {
    #estudante
    // ...
}