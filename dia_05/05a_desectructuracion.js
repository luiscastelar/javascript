// Depuración:
debugger;


// Creación de un array
let entrada = [3, 4, 5];

//let otro = Array.from( objetoDeTipoHTMLCollection );

let salida = [1, 2, entrada];
salida = [];

// Creación de array derivado de una desectructuración (...entrada)
salida = [1, 2, ...entrada,6];
console.log(`Array de trabajo = ${salida}`);

// Obteniendo posiciones concretas de un array por desectructuración
let primero, segundo, resto;
[primero, segundo, ...resto] = salida;
console.log(`Obtenemos el 2º valor = ${segundo}`);



// Objetos
//-------------------------------
let a, b, c;
({a, b, c} =  { a: 3, b: 4, c: 5 });


let objeto = {a, b, c};

// Composición
let objetoCompuesto = {uno: 1, dos: 2, ...objeto};
console.log("Objeto de trabajo = ", objetoCompuesto);

console.log("Obtenemos el 2º atributo", objetoCompuesto.b);


// Las opciones de desectructuración de objetos es amplia:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring
//
// Un buena explicación de manz.dev: https://lenguajejs.com/javascript/objetos/desestructuracion-objetos/