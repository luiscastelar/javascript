// Depuración:
debugger;


// Creación de array de partida
let entrada = [1, 2, 3, 4, 5];
console.log(`Array de trabajo = ${entrada}`);


// Creamos las funciones callback
const print = e => console.log(e);
const doble = e => 2*e;
//function double(e){ return 2*e; }
const pares = e => (e%2)==0;
const suma = (acumulado, e) => acumulado +  e;


// Loops - Lazos
// Consumo del array
entrada.forEach( print );

// Modificación del array
let arrayDeDobles = entrada.map( doble );
//arrayDeDobles.forEach(print);
console.log(`Original: [${entrada}] -> modificado -> [${arrayDeDobles}]` );


//entrada = [ 4, 5, 7, 8];
// Filtrado
let arrayDePares = entrada.filter( pares );
console.log(`Original: [${entrada}] -> filtrado -> [${arrayDePares}]` );

// Reduce
let valorInicial = 10
let valorDeLaSuma  = entrada.reduce( suma, valorInicial );
console.log(`Suma de [${entrada}] = ${valorDeLaSuma}`);

// También podríamos reducir de una forma más imperativa y verbosa
let valorFinal = valorInicial;
const acumular = e => valorFinal += e;
entrada.forEach( acumular );
console.log(`ValorFinal: ${valorFinal}`);


// Reduciendo arrays incompletos:
// //let arregloIncompleto = [1, , , , 5];
let arregloIncompleto = [1];
arregloIncompleto[4] = 5;
const concatenar = (acumulado, e) => acumulado + ", "+ e;
let concatenado  = arregloIncompleto.reduce( concatenar );
console.log(`Todos los elementos del [${arregloIncompleto}] = ${concatenado}`);


// Objeto
let propiedades = [{nombre1: 'valor 1'}, {nombre2: 2}, {nombre3: true}]
const objetivar = (objeto, propiedad) => {
    for(const key in propiedad){
        objeto[key] = propiedad[key];
    }
    return objeto;
}
let objeto = {}
propiedades.reduce( objetivar, objeto )
console.log(`Objeto resultante de añadir las propiedades`, propiedades, objeto)

// every par?
let sonTodosPares = entrada.every( pares );
console.log(`¿Todos los elementos son pares? ${sonTodosPares}`);

let sonTodosMenoresDe5 = entrada.every( e => e < 6 );
console.log(`¿Todos los elementos son menores de 6? ${sonTodosMenoresDe5}`);

// Al vuelo:
// 1. Creamos el array
// 2. Iteramos sobre él...
// 3. ... con la lambda
console.log(`¿Todos los elementos son mayores que 4? ${ [5, 6, 7].every( e => e > 4 ) }`);

// some par?
let hayAlgunoPar = entrada.some( pares );
console.log(`¿Hay algún elemento par? ${hayAlgunoPar}`);
