// Ejercicio 1
// Crea una variable llamada edad y asígnale el valor 18. Crea una condicional
// que muestre un mensaje de alerta si la edad es mayor o igual a 18.
let MAYOR_DE_EDAD = 18;
let edad = 18;

const esMayorDeEdad = edad => (edad >= MAYOR_DE_EDAD)? console.log("Es mayor de edad") : undefined ;

esMayorDeEdad(edad);
esMayorDeEdad(17);
