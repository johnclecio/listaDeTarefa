let jogoEncerrado = false;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnRefresh").textContent = "Reiniciar";
    document.getElementById("btnRefresh").style.display = "none";
});

const gerarNumero = function () {
    return Math.floor(Math.random() * 100) + 1;
};

let numeroSecreto = gerarNumero();
let tentativas = 10;
let erros = 0;

const partesBoneco = [
    "cabeca",
    "corpo",
    "braco-esq",
    "braco-dir",
    "perna-esq",
    "perna-dir",
    "olho-esq",
    "olho-dir",
    "boca",
    "chapeu"
];

function finalizarJogo() {
    jogoEncerrado = true;

    document.getElementById("numberDigitado").disabled = true;
    document.getElementById("btnChutar").style.display = "none";
    document.getElementById("btnRefresh").style.display = "block";
}


function reiniciarJogo() {
    jogoEncerrado = false;
    tentativas = 10;
    erros = 0;
    numeroSecreto = gerarNumero();

    document.getElementById("numberDigitado").disabled = false;
    document.getElementById("numberDigitado").value = "";

    document.getElementById("btnChutar").style.display = "block";
    document.getElementById("btnRefresh").style.display = "none";

    document.getElementById("dicas").textContent =
        "🎯 Novo jogo iniciado! Digite um número entre 1 e 100.";

    partesBoneco.forEach(parte => {
        document.getElementById(parte).style.display = "none";
    });
}


function desenharBoneco() {
    if (erros < partesBoneco.length) {
        document.getElementById(partesBoneco[erros]).style.display = "block";
        erros++;
    }
}

function chutar() {
    if (jogoEncerrado) return;

    const numberDigitado = Number(
        document.getElementById("numberDigitado").value
    );

    const dicas = document.getElementById("dicas");

    if (numberDigitado === numeroSecreto) {
        dicas.textContent = `🎉 Você ganhou! O número era ${numeroSecreto}`;
        finalizarJogo();
        return;
    }

    tentativas--;
    desenharBoneco();

    if (tentativas === 0) {
        dicas.textContent = `💀 Fim de jogo! O número era ${numeroSecreto}`;
        finalizarJogo();
        return;
    }

    dicas.textContent =
        numberDigitado < numeroSecreto
            ? `❌ Errou! O número secreto é MAIOR. Tentativas restantes: ${tentativas}`
            : `❌ Errou! O número secreto é MENOR. Tentativas restantes: ${tentativas}`;
}
