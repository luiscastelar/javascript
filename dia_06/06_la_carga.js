// Lo antiguo:
//------------------------------------------------------------

// 0. Las constantes

// 1. La captura
const ELEMENTO = document.getElementById('elProblema');
const STATUS = document.getElementById('status');

// 2. El procesado
let msg = ELEMENTO.getHTML();
console.log(msg)
STATUS.innerHTML = msg;

// 3. Los eventos

// 4. las funciones aux