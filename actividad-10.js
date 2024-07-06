// Muestra el día actual usando Date().

// Variables

const numeroDia = document.querySelector ("#numero-dia");
const hora = document.querySelector ("#hora");
const minutos = document.querySelector ("#minutos");
const segundos = document.querySelector ("#segundos");
let tiempoIntervalo = 1000;
let intervalo = null;

// Funcion

function renderizar (){
    numeroDia.textContent = diaDOM();
    hora.textContent = horaDOM();
    minutos.textContent = minutosDOM();
    segundos.textContent = segundosDOM();
}

function diaDOM (){
   const miDate = new Date();
    return forzar2Numeros(miDate.getDate());
}

function horaDOM (){
    const miDate = new Date();
    return forzar2Numeros(miDate.getHours());
}

function minutosDOM (){
    const miDate = new Date();
    return forzar2Numeros(miDate.getMinutes());
}

function segundosDOM (){
    const miDate = new Date();
    return forzar2Numeros(miDate.getSeconds());
}

function intervaloInicio (){
    renderizar()
    intervalo = setInterval(renderizar, tiempoIntervalo);
}

function forzar2Numeros(numero) {
    if (numero <= 9) {
    return `0${numero}`;
    } else {
    return numero;
    }
}

// Inicio

intervaloInicio();