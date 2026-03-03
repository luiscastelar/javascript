// Depuración:
debugger;

// A lo System.out.println...
let texto = "Mi texto";
console.log(texto);

// A lo Exception... (en navegador)
console.error("Texto de error");

// Y otras formas (en navegador)
console.debug("Texto de depuración");
console.info("Texto de información");
console.warn("Texto de advertencia");

// Aserciones 
console.assert(false, "Falla");
console.assert(true, "No falla");

// Trazabilidad (navegador vs node vs bun)
console.trace("Texto a trazar");

// Tablas para arrays y objetos:
console.table(["apples", "oranges", "bananas"]);
console.table([[1, 2, 3],[4, 5, 6]]);