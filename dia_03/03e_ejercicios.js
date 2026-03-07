// 1. Calculadora de gastos de viaje. 
//------------------------------------
// Escribe un programa que calcule el coste total de un viaje, incluyendo los
// gastos de alojamiento, alimentación y entretenimiento.
const hosting = Number(prompt("Gastos de alojamiento", 0.0));
const food = Number(prompt("Gastos de alimentación:", 0.0));
const entertaiment = Number(prompt("Gastos de entretenimiento:", 0.0)); 

const calcular = (a, b, c) =>  a + b + c ;

alert(`El coste total es: ${calcular(hosting, food, entertaiment)} €` );