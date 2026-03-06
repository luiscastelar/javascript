// Depuración:
debugger;

// A lo bruto
uno = 1;
console.log("Valor de una variable sin declarar = ", uno);

// No usar NUNCA var (hasta que sepas lo que haces)
var dos = 2;
console.log("Valor de una variable global = ", dos);

// Usar let
let tres = 3;
console.log("Valor de una variable local = ", tres);

// Usar const
const CUATRO = 4;
console.log("Valor de una constante = ", CUATRO);

CUATRO = 8;
// Error al intentar cambiar la constante