// 8. Mostrar el nombre de los alumnos (sólo el nombre) ordenados según las notas de LMSGI.
// 8.1 Crear alumno
class Alumno{
    constructor(nombre, nota=0){
        this.nombre = nombre;
        this.nota = nota;
    }
}

// 8.2 Crear listado de ejemplo
let alumnos = [ new Alumno('juan', 10), new Alumno('pedro', 7), new Alumno('maría', 8)];

// 8.3 Crear función ordenadora (ascendente)
const funcionOrdinadora = (uno, dos) => dos.nota - uno.nota;

// 8.4 Ordenar alumnos
console.log( 
    "Alumnos ordenados:",
    alumnos.sort( funcionOrdinadora )
);

// 8.5 Ordenar ascendente
console.log( 
    "Alumnos ordenados:",
    alumnos.sort( funcionOrdinadora ).reverse()
);

// 8.6 Mostrar los nombre
console.log(
    "Mostrar los nombres:",
    alumnos.sort( funcionOrdinadora ).reverse().map( alu => alu.nombre )
);

// 8.7 Mostrar los Nombre
const capitalize = nombre => String(nombre).charAt(0).toUpperCase() + String(nombre).slice(1)
console.log(
    "Final:",
    alumnos.sort( funcionOrdinadora )
        .reverse()
        .map( alu => alu.nombre )
        .map( capitalize )
);