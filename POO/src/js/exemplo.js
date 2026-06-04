

const pessoa = {nome : "Joao", idade : 33 }


class Veiculo {

    constructor(marca, modelo , ano){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        this._ligado = false;

    }

    ligar(){
         this._ligado = true;
         console.log("O veiculo foi ligado.")
    }
    desligar(){
        this._ligado = false;
         console.log("O veiculo foi desligado.")

    }
    get ligado(){
        return this._ligado;
    }



}

//const veiculoNovo = new Veiculo("Honda", "Civic", 2025);

//console.log(veiculoNovo);
//veiculoNovo.ligar();
//veiculoNovo.desligar();
//console.log("o veiculo esta ?: " , veiculoNovo.ligado);


class Moto extends Veiculo {
    constructor(marca, modelo, ano){
        super(marca, modelo, ano)
    }
}

//const motoNova = new Moto("Yamaha", "Fazer-160", 2025);
//motoNova.ligar();
//console.log(motoNova);


class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroPortas){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPortas(){
        console.log("As porta do carro foram abertas.")
    }
}

const carro = new Carro("Honda", "Civic", 2025, 4);
const motoNova = new Moto("Yamaha", "Fazer-160", 2025);

carro.ligar();
carro.desligar();
carro.abrirPortas();

motoNova.abrirPortas();






