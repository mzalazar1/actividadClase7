/* 1. Variables y Operadores
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */

var nombre = "Marcos";
var apellido = "Zalazar";

var vehiculo = "auto";
var marca = "Fiat"

var nombreCompleto = nombre + apellido;
console.log('Nombre y Apeliido:', nombreCompleto);

var total = vehiculo.length + marca.length;
console.log('Cantidad letras', total);