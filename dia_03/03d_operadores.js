// Operadores "modernos":
//-----------------------
console.log("Operador nullish:");
const nullish = msg => {
    console.log("Antes:", msg, " => ", msg ?? "No tiene valor" );
    console.log("Después", msg);
}

// Nullish (coalescencia) o valor por defecto:
let variable = null;
nullish( variable );

nullish( "Un valor" );

// Asignador nullish:
console.log("\nOperador asignación-nullish:");
const assignNullish = msg => {
    console.log("Antes:", msg, " => ", msg ??= "Valor por defecto" );
    console.log("Después", msg);
}
assignNullish( null );
assignNullish( "Un valor" );


// Importante el encadenamiento opcional '?.' 
// y desempaquetado o desectructuración '...'
// (Los usaremos más adelante)