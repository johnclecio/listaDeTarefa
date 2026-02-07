

export class ContaBancaria{
    #saldo
    constructor(){
        this.#saldo = 0;
    }

    depositar(valor){
        this.#saldo += valor;

    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <= this.#saldo;
    }

    get saldo(){
        return this.#saldo;
    }
}

 export class CaixaEletronica{

    constructor(conta){
        this.conta = conta;

    }
    sacar(){
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        

        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);

        }else{
            this.mostrarSaldo("Insuficiente!");
        }
    }

    depositar(){
        const valorDeposito = parseFloat(document.getElementById("valorDepositar").value);

        this.conta.depositar(valorDeposito);
        this.mostrarSaldo(this.conta.saldo);
    }

    mostrarSaldo(saldo){

        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDepositar").value = '';
        document.getElementById("valorSaque").value = '';

    }
  

    
}