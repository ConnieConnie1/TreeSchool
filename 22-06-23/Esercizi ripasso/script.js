// Puntatori a cui riferirsi

const pulsanteRosso = document.getElementById("red-btn");
const pulsanteGiallo = document.getElementById("yellow-btn");
const pulsanteVerde = document.getElementById("green-btn");
const boxColorato = document.getElementById ("semaforo");

//aggiungo un ascoltatore all'evento di click legato alla funzione
pulsanteRosso.addEventListener("click",changeToRed);

function changeToRed () {
    //gli dico che cambia il colore
    boxColorato.classList.add("red-box");
}
//faccio lo stesso per gli altri colori
pulsanteGiallo.addEventListener("click",changeToYellow);
pulsanteVerde.addEventListener ("click",changeToGreen);

function changeToYellow (){
    boxColorato.classList.add("yellow-box")
}

function changeToGreen (){
    boxColorato.classList.add("green-box")
}

