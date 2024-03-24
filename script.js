const on = document.getElementById('on');
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');
let lampadaLigada = false; 

function lampOn() {
    if (!lampadaLigada) {
        lamp.src = './img/ligada.jpg';
        document.querySelector(".nome").textContent = "Lâmpada Acesa!";
        lampadaLigada = true; 
    }
}

function lampOff() {
    if (lampadaLigada) {
        lamp.src = './img/desligada.jpg';
        document.querySelector(".nome").textContent = "Lâmpada Apagada!";
        lampadaLigada = false; 
    }
}

on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);
