// Vamos a estructurar todos los ejercicios en un programa.
//
// Para ello:
// 1. Creamos la funciones de operaciones (que resuelven ejericcios)
// 2. Creamos una función `main()` que nos permita gestionar el flujo
// 3. Llamamos a `main()`


/** 1. Calculadora de gastos de viaje. 
 * ------------------------------------
 * 
 * Escribe un programa que calcule el coste total de un viaje, incluyendo los
 * gastos de alojamiento, alimentación y entretenimiento.
 */
const calcularGastosViaje = ()=>{

    const hosting = Number(prompt("Gastos de alojamiento", 0.0));
    const food = Number(prompt("Gastos de alimentación:", 0.0));
    const entertaiment = Number(prompt("Gastos de entretenimiento:", 0.0)); 

    const calcular = (a, b, c) =>  a + b + c ;

    alert(`El coste total es: ${calcular(hosting, food, entertaiment)} €` );
}

/** Función principal "main()"
 * 
 * Gestiona el flujo de ejecución
 */
function main(){
    const GASTOS = 1, EDAD = 2, IMC = 3, DESCUENTOS = 4, TEMPERATURA = 5, 
            FIBONACCI = 6, FACTORES = 7, PRIMOS = 8, FACTORIAL = 9, SALIR = 0;
    let msgMenu = `
    1. Calculadora de gastos de viaje. Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.
    2. Calculadora edad canina. Crea un programa que convierta la edad de un perro a años humanos.
    3. Calculadora de IMC (Índice de Masa Corporal). Crea un programa que calcule el IMC de una persona a partir de su peso y altura.
    4. Calculadora de descuentos. Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.
    5. Conversor de temperatura. Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit o viceversa, según la elección del usuario.
    6. Generador de secuencia Fibonacci. Crea un programa que genere los primeros N términos de la secuencia de Fibonacci, donde N es un número insertado por el usuario.
    7. Calculadora de factores. Dado un número, descomponlo en factores. Si es primo indícalo.
    8. Generador de números primos. Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay entre esos dos números, incluyendo los extremos.
    9. Calcular factorial de un número. Escribe un programa que calcule de forma recursiva el factorial de un número entero no negativo ingresado por el usuario.
    0. Finalizar
    `
    let eleccion
    do {
        eleccion = Number(prompt(msgMenu, 0))
        switch (eleccion){
            case GASTOS:
                calcularGastosViaje();
                break;
            case SALIR:
                console.log("Hasta otro día");
            default:
                console.error("Operación no soportada");
                break;
        }
    }while( eleccion != SALIR)   
}


// Arrancamos la función main()
// (no es necesario, pero los que venimos de Java estaremos más cómodos así)
main();

