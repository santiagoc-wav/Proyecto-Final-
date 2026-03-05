const titulo = document.getElementById("titulo");
const iconContainer = document.getElementById("iconContainer");

// AUDIO PAD INICIAL
const audioPad = new Audio("audios/Pad.mp3");
let isPlaying = false;

// iconos
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

// gifs
const gifs = [
    "gifs/gif1.gif",
    "gifs/gif2.gif",
    "gifs/gif3.gif",
    "gifs/gif4.gif",
    "gifs/gif5.gif",
    "gifs/gif6.gif",
    "gifs/gif7.gif",
    "gifs/gif8.gif"
];

// audios
const audios = [
    "audios/audio1.mp3",
    "audios/audio2.mp3",
    "audios/audio3.mp3",
    "audios/audio4.mp3",
    "audios/audio5.mp3",
    "audios/audio6.mp3",
    "audios/audio7.mp3",
    "audios/audio8.mp3"
];

let yaAparecieron = false;


// movimiento aleatorio
function moverAleatoriamente(){

    const elementos = document.querySelectorAll(".icon");

    elementos.forEach(elemento => {

        const x = Math.random()*200 - 100;
        const y = Math.random()*200 - 100;
        const rotacion = Math.random()*40 - 20;

        elemento.style.transform =
        `translate(${x}px, ${y}px) rotate(${rotacion}deg)`;

    });

}


// click titulo
titulo.addEventListener("click", () => {

    // sonido pad
    if(!isPlaying){
        audioPad.loop = true;
        audioPad.play();
        isPlaying = true;
    }

    if(yaAparecieron) return;

    iconos.forEach((ruta, index) => {

        // contenedor icono
        const icon = document.createElement("div");
        icon.classList.add("icon");

        icon.style.top = Math.random()*80 + "%";
        icon.style.left = Math.random()*80 + "%";

        // imagen icono
        const img = document.createElement("img");
        img.src = ruta;

        icon.appendChild(img);

        // click icono
        icon.addEventListener("click", () => {

            // evitar duplicar gif
            if(icon.querySelector(".gif")) return;

            // crear gif
            const gif = document.createElement("img");
            gif.src = gifs[index];
            gif.classList.add("gif");

            icon.appendChild(gif);

            // reproducir audio
            const sonido = new Audio(audios[index]);
            sonido.loop = true;
            sonido.play();

        });

        iconContainer.appendChild(icon);

    });

    yaAparecieron = true;

    // mover cada 2 segundos
    setInterval(moverAleatoriamente,2000);

});