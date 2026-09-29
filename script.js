/* =========================
   NAVEGAÇÃO
========================= */

function irPara(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    const destino = document.getElementById(id);

    if (destino) {
        destino.classList.add("ativa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   MÚSICA
========================= */

const musica = document.getElementById("musica");

function iniciarMusica() {

    if (!musica) {
        return;
    }

    musica.volume = 0.5;

    musica.play().catch(function(erro) {

        console.log(
            "O navegador bloqueou o autoplay da música."
        );

    });
}


/* =========================
   CORAÇÕES
========================= */

const tiposCoracao = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘"
];

function criarCoracao() {

    const container =
        document.getElementById("coracoes");

    if (!container) {
        return;
    }

    const coracao =
        document.createElement("div");

    coracao.classList.add("coracao");

    coracao.innerHTML =
        tiposCoracao[
            Math.floor(
                Math.random() *
                tiposCoracao.length
            )
        ];

    coracao.style.left =
        Math.random() * 100 + "%";

    coracao.style.fontSize =
        (15 + Math.random() * 25) + "px";

    const duracao =
        5 + Math.random() * 6;

    coracao.style.animationDuration =
        duracao + "s";

    container.appendChild(coracao);

    setTimeout(function() {

        coracao.remove();

    }, duracao * 1000);
}


/* Cria corações constantemente */

setInterval(criarCoracao, 500);


/* =========================
   EASTER EGG DOS ALIENS
========================= */

let aliensEncontrados = 0;


/* Quando clicar em um alien */

function encontrarAlien(alien) {

    if (alien.classList.contains("encontrado")) {
        return;
    }

    alien.classList.add("encontrado");

    aliensEncontrados++;

    console.log(
        "Aliens encontrados:",
        aliensEncontrados
    );


    /* Quando encontrar os 10 */

    if (aliensEncontrados === 10) {

        setTimeout(function() {

            abrirEasterEgg();

        }, 500);

    }

}


/* =========================
   ABRIR EASTER EGG
========================= */

function abrirEasterEgg() {

    const easterEgg =
        document.getElementById("easterEgg");

    if (!easterEgg) {
        return;
    }

    easterEgg.classList.add("ativo");

    if (musica) {
        musica.volume = 0.15;
    }

}


/* =========================
   FECHAR EASTER EGG
========================= */

function fecharEasterEgg() {

    const easterEgg =
        document.getElementById("easterEgg");

    if (!easterEgg) {
        return;
    }

    easterEgg.classList.remove("ativo");

    if (musica) {
        musica.volume = 0.5;
    }

}