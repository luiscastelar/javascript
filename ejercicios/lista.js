// 0. Las constantes y variables

// 1. La captura
const NUEVA = document.querySelector("#nuevaTarea");
const BOTON = document.querySelector("#anhadirTarea");
const LIMPIAR = document.querySelector("#limpiar");
const LISTA = document.querySelector("#listaDeTareas");
const STATUS = document.querySelector("#status");
const ERROR = document.querySelector("#error");

// 2. El procesado (las acciones)

const anahdirEvento = elemento => {
    elemento.addEventListener(
        "click", 
        evento => elemento.classList.toggle("tachado") 
    );
};

const anhadirTarea = evento => {
    evento.preventDefault();

    let nueva = NUEVA.value;        // Capturamos el texto de la tarea
    let li = document.createElement("li");  // Creamo el nuevo elemento "li"
    li.textContent = nueva;         // Le añadimo el texto de la tare

    anahdirEvento(li);

    // Añadimos el nuevo "li" a la lista
    LISTA.insertBefore(li, LISTA.firstElementChild);
    console.log(nueva);
};

const limpiar = evento => {
    evento.preventDefault();

    if ( confirm("¿Estás seguro?")){
        console.log("Vamos a limpiar");
        let list = document.querySelectorAll("#listaDeTareas li");
        let listDeTachados = Array(...list).filter( elemento => elemento.classList.contains("tachado") );
        console.log(listDeTachados);
        listDeTachados.forEach( elemento => elemento.remove());
    } else {
        console.log("Por los pelos");
    }
    
};


// 3. Los eventos (los desencadenantes)
BOTON.addEventListener("click", anhadirTarea);
LIMPIAR.addEventListener("click", limpiar);

// 4. Funciones auxiliares