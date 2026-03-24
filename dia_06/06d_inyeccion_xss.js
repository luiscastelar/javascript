// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes

// 1. La captura
const DIV = document.querySelector('#elDiv');               // => Element
const NOMBRE = document.querySelector('#nombre');
const APELLIDOS = document.getElementById('apellidos');    // => HTMLElement

const BOTON = document.querySelector('#boton');
const STATUS = document.querySelector("#status");


// 2. El procesado
ocualtarCosasALosAlumnos();

const ejecutar = evento => {
    // Leer contenido de un div
    let divMetothGetHTML = DIV.getHTML();   // SEGURO: Serializado el contenido => texto
    let divTextContet = DIV.textContent;    // SEGURO: Obtenemos el texto limpio del html
    let divInnerHTML = DIV.innerHTML;       // PELIGRO!!! Obtenemos el HTML o XML. No usar NUNCA

    STATUS.innerHTML = `Apellidos leídos:<br />
        getHTML(): ${divMetothGetHTML}<br />
        innerHTML: ${divInnerHTML}<br />
        textContent: ${divTextContet}
        `;


    // Leer valor de un input SIEMPRE sanitizando:
    let nombre = sanitizar(NOMBRE.value);
    let apellidos = sanitizar(APELLIDOS.value);

    console.log("Leído:", nombre, apellidos);

    // Modificar div
    let mensaje = `<hr />nombre: ${nombre}; apellidos: ${apellidos}`;
    try{
        STATUS.setHTML(mensaje);
    } catch (err) {
        console.log("Tu navegador aún no soporta setHTML()");
        const nodo = document.createElement("div");
        nodo.innerHTML = mensaje;

        STATUS.appendChild(nodo);
        // o Sustituir
        //STATUS.replaceWith(nodo);
    }
    

    // Modificar valor de un input
    NOMBRE.value = apellidos;
    APELLIDOS.value = nombre;

    // XSS => NO usar
    DIV.innerHTML = apellidos;
};


// 3. Los eventos














// 4. las funciones aux
// Limpieza básica eliminando etiquetas HTML
function sanitizar(cadena) {
    return cadena.replace(/<[^>]*>/g, "");
}




function mostrar(ele){
    let msg = ele.getHTML();
    console.log(msg);
    let parrafo = document.createElement("p");
    parrafo.innerHTML = msg;
    STATUS.append( parrafo );
}


function ocualtarCosasALosAlumnos(){
    document.querySelector('#formulario').addEventListener("click", event => event.preventDefault());
    BOTON.addEventListener('click', e => ejecutar(e));    
}