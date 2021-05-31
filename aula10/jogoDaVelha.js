// Começa por pensar que membros precisas para:

// Ver tabuleiro no terminal
// Ver pergunta no terminal
// Registar jogada
// Saber quem é o jogador atual
// Saber se já há um vencedor
// Saber quem é o vencedor
// E cria a estrutura da classe

class JogoDoGalo {
    #tabuleiro
    #proximoJogador
    
    constructor(tabuleiro, jogador){
        this.#tabuleiro = [

            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
            
        ];
        this.#proximojogador = x;
    }

    toString() {
        // retorna a string que representa o estado atual do jogo
        return this.#tabuleiro.map(l => l.join("|").join("\n"))
    }

    obtemPerguntaParaProximoJogador() {
        return `Jogador ${this.#proximoJogador}, qual é a tua jogada?`
    }

    registaJogada() {
        // pos é um número entre 0 e 8
        const linha = Math.floor(pos / 3);
        const coluna = pos % 3;
        if (this.#tabuleiro[linha][coluna] === " "){
            
        }
    }

    get jogadoAtual() {
        return this.#proximoJogador;
    }

    jogoTerminado(){

    }
}