let numeros = [10, 11];

// 1. Pila
console.log("Las pilas se mete y saca del final:");
console.log("El original:", numeros);
console.log("Añadimos a la pila:", numeros.push(12), numeros);
console.log("Sacamos de la pila:", numeros.pop(), numeros);

// 2. Colas
console.log("Las colas se mete al final y saca del principio:")
console.log("Añadimos a la lista:", numeros.push(12),numeros);
console.log("Sacamos de la lista:",numeros.shift(), numeros);

// 3. Listas
console.log("Las listas se mete y saca del final:")
console.log("Añadimos a la cola:", numeros.unshift(10), numeros);
console.log("Sacamos de la cola:", numeros.pop(), numeros);