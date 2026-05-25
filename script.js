// Os 4 pedaços do seu código original que serão liberados
const fragmentosCodigo = [
`// [PARTE 1 LIBERADA] - Controle de Abas
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
`,
`
// [PARTE 2 LIBERADA] - Definição dos Alvos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-12-28T23:59:59");
const tempoObjetivo2 = new Date("2026-12-28T23:59:59");
const tempoObjetivo3 = new Date("2026-12-28T23:59:59");
const tempoObjetivo4 = new Date("2026-12-28T23:59:59");

const tempos = [
    tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4
];
`,
`
// [PARTE 3 LIBERADA] - Inicialização dos Contadores
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);
`,
`
// [PARTE 4 LIBERADA] - Função de Cálculo Matemático
function calculaTempo(tempoObjetivo1) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias "
        + horas + " horas "
        + minutos + " minutos "
        + segundos + " segundos ";
}
`
];

const fases = document.querySelectorAll(".aba-conteudo");
const displayCodigo = document.getElementById("codigo-recuperado");
let faseAtualIndex = 0;
let codigoCompletoMontado = "";

function verificarFase(indexFase, respostaCorreta) {
    const inputJogador = document.getElementById(`resposta-${indexFase}`);
    const respostaUsuario = inputJogador.value.toLowerCase().trim();

    if (respostaUsuario === respostaCorreta) {
        alert("🔓 Resposta Correta! Fragmento de código descriptografado.");

        // Se for o primeiro acerto, limpa o comentário inicial do terminal
        if (faseAtualIndex === 0) {
            codigoCompletoMontado = "";
        }

        // Concatena o pedaço de código liberado
        codigoCompletoMontado += fragmentosCodigo[indexFase];
        displayCodigo.textContent = codigoCompletoMontado;

        // Avança a interface para a próxima fase
        fases[faseAtualIndex].classList.remove("ativo");
        faseAtualIndex++;
        
        if (faseAtualIndex < fases.length) {
            fases[faseAtualIndex].classList.add("ativo");
        }
    } else {
        alert("❌ Resposta incorreta! O sistema recusou o comando. Tente novamente.");
    }
}