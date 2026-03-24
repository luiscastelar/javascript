// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes y variables
let vecesA = 0;
let vecesB = 0;

// 1. La captura
const DIV = document.querySelector("#elDiv");               // => Element
const NOMBRE = document.querySelector("#nombre");
const APELLIDOS = document.getElementById("apellidos");    // => HTMLElement

const BOTON = document.querySelector("#boton");
const STATUS = document.querySelector("#status");


// 2. El procesado (las acciones)
const botonPulsado = evento => {
    //ocualtarCosasALosAlumnos(evento);
    STATUS.textContent = "Has pulsado el botón";
};

const sobreDiv = () => STATUS.textContent = "Estás sobre el div";

const fueraDelDiv = () => STATUS.textContent += " y ahora fuera de él";

const pulsadaLaA = () => {
    let nodo = document.createElement("p");
    nodo.textContent = `tecla 'a' pulsada ${vecesA++} veces`;
    STATUS.insertBefore(nodo, STATUS.firstElementChild);
};

const soltadaLaB = () => {
    let nodo = document.createElement("p");
    nodo.textContent = `has soltado la 'b' ${vecesB++} veces`;
    STATUS.insertBefore(nodo, STATUS.firstElementChild);
}

const teclaPulsada = (event) => {
    switch(event.code){
    case "KeyA":
        pulsadaLaA();
        break;
    default:
        console.log("Pulsada tecla desconocida con código: ", ` ${event.code}`);
    }
};

const teclaSoltada = (event) => {
    switch(event.code){
    case "KeyB":
        soltadaLaB();
        break;
    default:
        console.log("Soltada tecla desconocida con código: ", ` ${event.code}`);
    }
};


// 3. Los eventos (los desencadenantes)
BOTON.addEventListener("click", evento => botonPulsado(evento));
DIV.addEventListener("mouseover", sobreDiv);
DIV.addEventListener("mouseout", fueraDelDiv);
document.addEventListener("keydown", teclaPulsada);
document.addEventListener("keyup", teclaSoltada);


// 4. las funciones aux

// Oculto a estudiantes














function ocualtarCosasALosAlumnos(evento){
    evento.preventDefault();
}
