// Depuración:
debugger;


// Número
let numero = 1;
numero = 1.265e16;
// Operador typeof y "===" (triple igual)
if ( typeof numero === "number" ) console.log(`${numero} -> Es un número`);

numero = "hola"
if ( typeof numero === "number" ) console.log(`${numero} -> Es un número`);
else console.log(`${numero} ya no es un número`);

// String
let texto = "Hola";
if ( typeof texto === "string" ) console.log(`${texto} -> Es un texto`);

// Gran entero (el long de Java)
let granEntero = BigInt("123456789012345678901234567890");
granEntero =123456789012345678901234567893n;
if ( typeof granEntero === "bigint" ) console.log(`${granEntero} -> Es un entero grande`);

// Boolean
let booleano = false;
if ( typeof booleano === "boolean" ) console.log(`${booleano} -> Es un booleano`);

// Variable que no existe
if ( typeof indefinido === "undefined") console.log(`"indefinido" -> Es un indefinido`);
// O que existe pero no se le asignó valor
let otroIndefinido;
if ( typeof otroIndefinido === "undefined") console.log(`${otroIndefinido} -> Es un indefinido`);

//------------
// Null -> primera sorpresa... null es un objeto de tipo "null"
let nulo = null;
if ( typeof nulo === "object" ) console.log(`${nulo} -> Es un valor nulo`);

// Funciones
const funcion = function saluda(){ console.log("Soy una funcion"); };
if ( typeof funcion === "function" ) console.log(`${funcion} -> Es un funcion`);

// Objetos
let objeto = { uno: 1};
if ( typeof objeto === "object" ) console.log(objeto, `${objeto} -> Es un objeto`);