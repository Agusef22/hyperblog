var frutas = ["Manzana", "Platano", "Cereza", "fresa"];

console.log(frutas);
// ["Manzana", "Platano", "Cereza", "fresa"]

console.log(frutas.length);
// 4

console.log(frutas[0]);
// Manzana

console.log(frutas[2]);
// Cereza



var masFrutas = frutas.push("Uvas"); // agregar elemento al arrays
frutas
// ["Manzana", "Platano", "Cereza", "fresa", "Uvas"]



var ultimo = frutas.pop("Uvas"); // Sacar elemento del arrays
frutas
// ["Manzana", "Platano", "Cereza", "fresa"]


var nuevaLongitud = frutas.unshift("Verduras");
frutas
// ["verduras","Manzana", "Platano", "Cereza", "fresa"]


var borrarFruta = frutas.shift("Verduras") // elimina el elemento que esta en primera posicion
frutas
// ["Manzana", "Platano", "Cereza", "fresa"]

var posicion = frutas.indexOf("Cereza");
posicion
// 2

