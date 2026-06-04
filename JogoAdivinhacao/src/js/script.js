// Constantes e variáveis iniciais
const MAX_TENTATIVAS = 10;
let numeroSecreto;
let tentativasRestantes;
let erros;
let jogoEncerrado = false;

const partesBoneco = [
    "cabeca", "corpo", "braco-esq", "braco-dir",
    "perna-esq", "perna-dir", "olho-esq", "olho-dir",
    "boca", "chapeu"
];

// Função para iniciar/reiniciar o jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = MAX_TENTATIVAS;
    erros = 0;
    jogoEncerrado = false;

    document.getElementById("mensagem").textContent = "🎯 Novo jogo iniciado! Digite um número entre 1 e 100.";
    document.getElementById("tentativasRestantes").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("palpite").disabled = false;
    document.getElementById("btnChutar").style.display = "inline-block";
    document.getElementById("btnReiniciar").style.display = "none";

    // Esconde todas as partes do boneco
    partesBoneco.forEach(parte => {
        document.getElementById(parte).style.display = "none";
    });
}

// Desenha uma parte do boneco a cada erro
function desenharBoneco() {
    if (erros < partesBoneco.length) {
        document.getElementById(partesBoneco[erros]).style.display = "block";
        erros++;
    }
}

// Função que executa quando o jogador chuta
function chutar() {
    if (jogoEncerrado) return;

    let palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");

    // Validação do número
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "⚠️ Digite um número válido entre 1 e 100.";
        return;
    }

    // Jogador acertou
    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Você ganhou! O número era ${numeroSecreto}`;
        document.getElementById("tentativasRestantes").textContent = "";
        fimDeJogo();
        return;
    }

    // Jogador errou
    tentativasRestantes--;

    // Usando for para desenhar uma parte do boneco
    for (let i = 0; i < 1; i++) {
        desenharBoneco();
    }

    // Atualiza tentativas restantes
    document.getElementById("tentativasRestantes").textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Fim de jogo se acabou as tentativas
    if (tentativasRestantes === 0) {
        mensagem.textContent = `💀 Você perdeu! O número secreto era ${numeroSecreto}`;
        document.getElementById("tentativasRestantes").textContent = "";
        fimDeJogo();
        return;
    }

    // Dicas para o jogador
    mensagem.textContent = palpite < numeroSecreto
        ? "❌ Errou! O número secreto é MAIOR."
        : "❌ Errou! O número secreto é MENOR.";

    document.getElementById("palpite").value = "";
}

// Finaliza o jogo, bloqueando input e alternando botões
function fimDeJogo() {
    jogoEncerrado = true;
    document.getElementById("palpite").disabled = true;
    document.getElementById("btnChutar").style.display = "none";
    document.getElementById("btnReiniciar").style.display = "inline-block";
}

// Eventos dos botões
document.getElementById("btnChutar").addEventListener("click", chutar);
document.getElementById("btnReiniciar").addEventListener("click", iniciarJogo);

// Inicia o jogo ao carregar a página
document.addEventListener("DOMContentLoaded", iniciarJogo);
