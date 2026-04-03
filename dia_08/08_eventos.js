// 0. Las constantes y variables

// 1. La captura
const cuandoCambia = document.querySelector("#cuandoCambia");
let cuandoPulso = document.querySelector("#onclick");
let delMouse = document.querySelector("#delMouse");


// 2. El procesado (las acciones)
const cambia = (evento) => { 
    console.log("El elemento \"onchange\" ha cambiado");

    // Hacemos algo
    const x = document.querySelector("#cuandoCambia");
    x.value = x.value.toUpperCase();

    // volcamos el evento (para debuggear)
    console.log("Evento:", evento);
}

// 3. Los eventos (los desencadenantes)
cuandoCambia.addEventListener("change", cambia);
cuandoPulso.addEventListener("click", (evento) => console.log("Hemos pulsado"));
delMouse.addEventListener("mouseover", (e) => console.log("Estamos sobre el elemento."));
delMouse.addEventListener("mouseout", (e) => console.log("Ya NO estamos sobre el elemento"));

// -----
// Todas las teclas
// -----
document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "Control") {
        // do not alert when only Control key is pressed.
        console.log("Pulsado ctrl");
        return; // forma rápida de salir de la función lambda
    }

    if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        console.log(`Combination of ctrlKey + ${keyName}`);
    } else {
        console.log(`Key pressed ${keyName}`);
    }
});

document.addEventListener("keyup", (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === "Control") {
        console.warn("Control key was released");
    }
});


console.log("Script completo sin errores");