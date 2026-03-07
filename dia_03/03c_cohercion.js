debugger;

let uno = "42";
let dos = 2;

let mostrar = a => console.log(`Var (tipo: ${typeof a}) = ${a}`);

let resultado = uno + dos;
mostrar( resultado );

// 1. Se encuentra el operador '+' que con los string significa concatenar.
// 2. Toma el operando 1,, al ser un string no hace nada.
// 3. Toma el operando 2, al ser un Number debe convertirlo a string.
// 4. Realiza la concatenación de "42" y "2" => string de "422"
//
// ¡¡¡Ojo!!! string y no String (gracias creadores de Js por complicarnos
// la vida)

resultado = dos + uno;
mostrar( resultado );

// Misma operativa y resultado

resultado = uno + dos.toString(); // => Coherción explícita => Mismo resultado

resultado = Number(uno) + dos; // => Coherción explícita => Distinto resultado
mostrar( resultado );

// Ahora vienen las curvas...
resultado = uno - dos;
mostrar( resultado );

// El operador '-' no existe con strings pero sí con numbers, por lo que 
// toca convertir a números ambas variables.

resultado = uno - dos.toString();
mostrar( resultado );

// ¿Qué pasara...?


// Y más problemas... falsy
// falsy es:
// - Booleano false
// - Number 0
// - String "" (vacío)
// - undefinied
// - NaN (Not a Number)

// RESTO => truthy
// Entonces, especialmente peligroso:

// Redefinimos 
mostrar = a => console.log(`Var (tipo: ${typeof a}, contenido: ${a}) = ${Boolean(a)}`);

// Testeamos:
// Booleanos
mostrar( false );
mostrar( true );

// Numeros
mostrar( 0 );
mostrar( 43 );

// strings
mostrar( "" );
mostrar( "Hola" );

// undefinied
let tres;
mostrar( tres );

// Infinito (ver wikipedia)
tres = dos / 0;
mostrar( tres );
console.log( "Es un NaN? ", Number.isNaN(tres) );

// Not a Number
tres = Number.NaN;
mostrar( tres );
console.log( "Es un NaN? ", isNaN(tres) );
tres = Number("a");
mostrar( tres );
console.log( "Es un NaN? ", isNaN(tres) );

// ¿Y ésto?
mostrar( "false" );

// Objetos
mostrar( {} );