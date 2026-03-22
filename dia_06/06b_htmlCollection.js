// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes

// 1. La captura
const GRUPO = document.getElementsByClassName("rojo");

const STATUS = document.getElementById("status");

// 2. El procesado
console.log( GRUPO );
let array = Array(...GRUPO);
console.log( array );

// ¿En qué se diferencian?
let primero = array.shift();
console.log("El primero:", primero);
console.log("El resto:", array);

// ¿Y con HTMLCollection?








//GRUPO[0].remove();


// 3. Los eventos

// 4. las funciones aux
