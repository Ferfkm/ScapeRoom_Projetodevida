// ==========================================
// 1. SISTEMA DE ABAS (SEU CÓDIGO ORIGINAL INTEGRADO)
// ==========================================
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// ==========================================
// 2. CRONÔMETROS DO GAME (SEU CÓDIGO EXPANDIDO E CORRIGIDO)
// ==========================================
const contadores = document.querySelectorAll(".contador");

// Definição das datas alvo futuras (Ano atual: 2026/2027)
const tempoObjetivo1 = new Date("2026-12-28T23:59:59");
const tempoObjetivo2 = new Date("2027-03-15T23:59:59");
const tempoObjetivo3 = new Date("2027-06-20T23:59:59");
const tempoObjetivo4 = new Date("2027-12-31T23:59:59");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula a diferença de tempo
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return "Tempo Esgotado!";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Espaçamento adicionado entre as palavras para melhor leitura na tela
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

// Função para atualizar todos os contadores da tela de uma vez só
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

// Executa a função a cada 1000 milissegundos (1 segundo) em tempo real
setInterval(atualizaCronometro, 1000);

// Executa imediatamente uma vez ao carregar a página para não iniciar em branco
atualizaCronometro();


// ==========================================
// 3. MECÂNICA DO ESCAPE ROOM (CUSTOMIZADOR DE CSS)
// ==========================================
function verificarSala1() {
    const inputVal = document.getElementById("input1").value;
    const previewBox = document.getElementById("preview1");

    // Aplica o código CSS digitado pelo usuário diretamente na caixa de exibição
    previewBox.style.cssText = inputVal;

    // Remove espaços e converte para minúsculo para facilitar a validação do jogador
    const codigoLimpo = inputVal.replace(/\s+/g, '').toLowerCase();

    // Verifica se ele digitou corretamente a propriedade solicitada
    if (codigoLimpo.includes("background