// 0. Las constantes y variables

// 1. La captura
const TEXTO = document.querySelector("#texto");
const STATUS = document.querySelector("#status");

// 2. El procesado (las acciones)

// 3. Los eventos (los desencadenantes)
TEXTO.addEventListener("click", evento => {

    if (TEXTO.classList.contains("tachado")){
        STATUS.textContent = "Tenía texto tachado -> se lo quito";
    } else {
        STATUS.textContent = "Tenía texto normal -> lo tacho";
    }

    TEXTO.classList.toggle("tachado");
    
});
