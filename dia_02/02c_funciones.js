// Antes de comenzar la interpretación del código, el motor lee el archivo y 
// "localiza" los "var" y los "function", por lo que están disponibles 
// SIEMPRE.

console.log(`Var uno antes de asignar valor: ${uno}`);

uno = 1;
console.log(`Var ahora: ${uno}`);

try{
    // Intentamos lo mismo con "dos" pero al ser let esto ya falla
    console.log( sumar(uno, dos) );
} catch (err) {
    console.error(`Ocurrió un error: ${err}`);
}

let dos = 2;
console.log(`Suma: ${ sumar(uno, dos)}`);

try{
    varQueContieneFuncionAnonima(uno, dos);
} catch (err) {
    console.error(`Ocurrió un error: ${err}`);
}

// Creamos una función anónima, la asignamos a una variable y la llamamos:
let varQueContieneFuncionAnonima = function(a, b){ console.log("Resultado =", a + b ); };
varQueContieneFuncionAnonima(2, 3);

// Incluso podemos ver su definición si la ponemos sin "()"
console.log("Definición: " + varQueContieneFuncionAnonima);

// Vamos a simplificar con las funciones arrow o lambda:
// Cambiamos el function por => 
let ejecutar = (a, b) => { 
    return `Resultado = ${a + b}` ; 
};
console.log( ejecutar(2, 3) );

// Y podemos cambiar su desarrollo:
ejecutar = (a, b) => { return `Resultado = ${a - b}`; };
console.log( ejecutar(2, 3) );

// Y cuando tengamos sólo una expresión, podemos obviar las llaves y el return
// (ojo: llaves y return van siempre juntas)
ejecutar = (a, b) =>  `Resultado = ${a - b}`;
console.log( ejecutar(2, 3) );

// Y podemos simplificar aún más quitando los parántesis si tenemos 1 variable
ejecutar = nombre => `¡Hola ${nombre}!`;
console.log( ejecutar("clase") );





// Elementos globales
var uno;
function sumar(a, b){ return a + b; } 
