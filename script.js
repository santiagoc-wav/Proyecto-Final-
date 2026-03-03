const titulo = document.getElementById("titulo");
const audio = new Audio("audios/Pad.mp3");

let isPlaying = false;

function playAudio() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}

// click
titulo.addEventListener("click", playAudio);
