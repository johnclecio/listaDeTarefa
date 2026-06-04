



class ValorEstacionado{
    #troco
    constructor(troco,tempo){
        this.#troco = 0;
        this.tempo = 0;

    }
    calcularTempo(valorPago) {
        if (valorPago < 1.00) {
            return "Valor insuficiente";
        }

        if (valorPago >= 3.00) {
            this.tempo = 120;
            this.#troco = valorPago - 3.00;
        } else if (valorPago >= 1.75) {
            this.tempo = 60;
            this.#troco = valorPago - 1.75;
        } else {
            this.tempo = 30;
            this.#troco = valorPago - 1.00;
        }

        return `Tempo: ${this.tempo} minutos | Troco: R$ ${this.#troco.toFixed(2)}`;
    }
    

}

const valorTotal = new ValorEstacionado();

function calcular() {
    const valor = Number(document.getElementById("valorDigitado").value);
    const resultado = valorTotal.calcularTempo(valor);
    document.getElementById("valorTotal").innerText = resultado;
}