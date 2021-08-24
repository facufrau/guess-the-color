const $color = document.querySelector('#adivinar-color');
const $listaBotones = document.querySelectorAll('.boton');
const $contenedorBotones = document.getElementById('contenedor-botones');
const $reiniciar = document.getElementById('reiniciar');
const $respuesta = document.getElementById('respuesta');

$reiniciar.onclick = reiniciar;
prepararJuego();


function reiniciar() {
    prepararJuego();
    $respuesta.textContent = '';
}

function generarNumeroAleatorio() {
    return Math.round(Math.random()*255);
}

function generarColoresAleatorios() {
    let coloresRandom = [];
    for (let i = 0; i < 6; i++) {
        let rgbIteracion = [];
        for (let i = 0; i < 3; i++) {
            rgbIteracion.push(generarNumeroAleatorio());
        }
        coloresRandom.push(rgbIteracion);
    }
    return coloresRandom;
}

function prepararJuego() {
    const coloresAleatorios = generarColoresAleatorios()
    for (let i = 0; i < 6; i++) {
        establecerColor($listaBotones[i], coloresAleatorios[i]);
    }

    const colorMostrado = coloresAleatorios[Math.round(Math.random()*5)];
    $color.textContent = `rgb(${colorMostrado[0]}, ${colorMostrado[1]}, ${colorMostrado[2]})`;

    $contenedorBotones.onclick = verificarColor;
}

function establecerColor(boton, coloresRGB) {
    let colorFondo = `background-color: rgb(${coloresRGB[0]}, ${coloresRGB[1]}, ${coloresRGB[2]})`;
    boton.setAttribute('style', colorFondo);
}

function verificarColor(e) {
    if (e.target.classList.contains('boton')){
        let colorElegido = e.target.style["background-color"];
        if (colorElegido === $color.textContent) {
            $respuesta.textContent = '¡Correcto! Adivinaste el color.';
        }
        else {
            $respuesta.textContent = 'Incorrecto, intentá con otro.';
        }
    }
    else {
        $respuesta.textContent = 'No hiciste click en ningún botón...';
    }
}
