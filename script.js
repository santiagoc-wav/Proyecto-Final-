const titulo = document.getElementById("titulo");
const iconContainer = document.getElementById("iconContainer");
const gifContainer = document.getElementById("gifContainer");

/* AUDIO PAD */

const audioPad = new Audio("audios/Pad.mp3");
let isPlaying = false;

/* ICONOS */

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

/* GIFS */

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

/* AUDIOS */

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

/* TEXTOS */

const textos = [
"seguro recordaré esto",
"eco urbano",
"ruido de ciudad",
"historia invisible",
"cuerpo y territorio",
"archivo vivo",
"ritmo cotidiano",
"paisaje sonoro"
];

/* POSICIONES FIJAS */

const posiciones = [
{top:"20%",left:"20%"},
{top:"35%",left:"40%"},
{top:"60%",left:"70%"},
{top:"50%",left:"25%"},
{top:"75%",left:"50%"},
{top:"30%",left:"70%"},
{top:"60%",left:"10%"},
{top:"15%",left:"55%"}
];

let yaAparecieron = false;


/* MOVIMIENTO ICONOS */

function moverAleatoriamente(){

const elementos = document.querySelectorAll(".icon");

elementos.forEach(icon=>{

const x = Math.random()*200 - 100;
const y = Math.random()*200 - 100;

icon.style.transform = `translate(${x}px,${y}px)`;

});

}


/* CALCULAR POSICION DEL GIF */

function posicionarGif(iconRect){

let top = iconRect.top - 240;
let left = iconRect.left - 60;

if(top < 0) top = iconRect.bottom + 10;
if(left < 0) left = 10;
if(left + 150 > window.innerWidth) left = window.innerWidth - 160;

return {top,left};

}


/* CLICK TITULO */

titulo.addEventListener("click",()=>{

/* sonido pad */

if(!isPlaying){

audioPad.loop = true;
audioPad.play();

isPlaying = true;

}

if(yaAparecieron) return;


/* CREAR ICONOS */

iconos.forEach((ruta,index)=>{

const icon = document.createElement("div");
icon.classList.add("icon");

icon.style.top = posiciones[index].top;
icon.style.left = posiciones[index].left;

/* imagen */

const img = document.createElement("img");
img.src = ruta;

icon.appendChild(img);


/* CLICK ICONO */

icon.addEventListener("click",()=>{


/* SI ESTA ACTIVO -> CERRAR */

if(icon.dataset.activo === "true"){

icon.dataset.activo = "false";

/* borrar gif */

const gif = document.getElementById("gif"+index);
if(gif) gif.remove();

/* borrar texto */

const texto = document.getElementById("texto"+index);
if(texto) texto.remove();

/* parar audio */

if(icon.audio){

icon.audio.pause();
icon.audio.currentTime = 0;

}

return;

}


/* ABRIR */

icon.dataset.activo = "true";


/* CREAR GIF */

const rect = icon.getBoundingClientRect();
const pos = posicionarGif(rect);

const gif = document.createElement("img");

gif.src = gifs[index];
gif.classList.add("gif");

gif.style.top = pos.top + "px";
gif.style.left = pos.left + "px";

gif.id = "gif"+index;

gifContainer.appendChild(gif);


/* CREAR AUDIO */

const sonido = new Audio(audios[index]);

sonido.loop = true;
sonido.play();

icon.audio = sonido;


/* CREAR TEXTO */

const texto = document.createElement("div");

texto.classList.add("textoFlotante");

texto.innerText = textos[index];

texto.id = "texto"+index;


/* POSICION RANDOM */

texto.style.top = Math.random()*90 + "vh";
texto.style.left = Math.random()*90 + "vw";


/* MOVIMIENTO RANDOM */

if(Math.random() > 0.5){

texto.classList.add("moverX");

}else{

texto.classList.add("moverY");

}

document.body.appendChild(texto);

});


iconContainer.appendChild(icon);

});


yaAparecieron = true;


/* MOVIMIENTO CONSTANTE */

setInterval(moverAleatoriamente,2000);

});