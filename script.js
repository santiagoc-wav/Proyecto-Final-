const titulo = document.getElementById("titulo");
const iconContainer = document.getElementById("iconContainer");

// AUDIO INICIAL
const audio = new Audio("audios/Pad.mp3");
let isPlaying = false;

// Lista de iconos
const iconos = [
    "icons/icon1.png",
    "icons/icon2.png",
    "icons/icon3.png",
    "icons/icon4.png",
    "icons/icon5.png",
    "icons/icon6.png",
    "icons/icon7.png",
    "icons/icon8.png"
];

let yaAparecieron = false;

titulo.addEventListener("click", () => {

    // reproducir audio pad
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }

    // poner los iconos
    if (yaAparecieron) return;

    iconos.forEach((ruta) => {

        const img = document.createElement("img");
        img.src = ruta;
        img.classList.add("icon");

        // Posición aleatoria
        img.style.top = Math.random() * 80 + "%";
        img.style.left = Math.random() * 80 + "%";

        iconContainer.appendChild(img);
    });

    yaAparecieron = true;
});