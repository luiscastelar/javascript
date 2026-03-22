// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes

// 1. La captura
const UNICO = document.getElementById("elId");
const GRUPO = document.getElementsByClassName("rojo");
const DIVS = document.getElementsByTagName("div");

const STATUS = document.getElementById("status");

// 2. El procesado
mostrar( UNICO );

let array = Array(...GRUPO);
array.forEach(e => mostrar(e) );

Array(...DIVS).forEach( mostrar );

// 3. Los eventos

// 4. las funciones aux
function mostrar(ele){
    let msg = ele.getHTML();
    console.log(msg);
    let parrafo = document.createElement("p");
    parrafo.innerHTML = msg;
    STATUS.append( parrafo );
}