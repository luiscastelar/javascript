function Coche(nombre) {
    this.nombre = nombre;
    ruedas = 4;
    this.toString = function(){ return `Esto es un coche ${this.nombre} y tiene ${ruedas} ruedas`};
}
let coche = new Coche("molon");
let volkswagen = Object.create(coche);
volkswagen.motor = "Gasoil";
volkswagen.toString = function(){ return `Esto es un volkswagen y tiene ${ruedas} ruedas`};

console.log( typeof coche, typeof volkswagen);
if ( coche instanceof Coche ) console.log(`${coche.toString() } -> Es un objeto de tipo "coche"`);
if ( volkswagen instanceof Coche ) console.log(`${coche.toString() } -> Es un objeto de tipo "coche"`);
try {
    if ( volkswagen instanceof volkswagen ) console.log(volkswagen.toString(), ` -> Es un objeto de tipo "${volkswagen.constructor.name}"`);
} catch (err) {
    console.error("volkswagen no es una función constructora y no puede usarse `instanceof`");
}

class Seat{
    constructor(nombre, motor){
        this.nombre = nombre;
        this.motor = motor;
    }
    toString() {
        return `Esto es un ${this.constructor.name} y tiene ${this.motor} motor`;
    }
}

let ibiza = new Seat('Ibiza', 'electrico');
if (ibiza instanceof Seat) console.log(`${ibiza.toString() } -> Es un objeto de tipo "${ibiza.constructor.name}"`);

