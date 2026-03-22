// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes

// 1. La captura
const UNICO = document.querySelector('#elId');
const GRUPO = document.querySelectorAll('.rojo');
const DIVS = document.querySelectorAll('div');

const STATUS = document.querySelector("#status");

// 2. El procesado
console.log( UNICO ); // Tipo NODE
mostrar( UNICO );

console.log(GRUPO); // Tipo NodeList
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