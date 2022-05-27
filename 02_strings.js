/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

/* primero */
var club = "riverplate";

var nombreClub = club.substring(0,5);
console.log('primerosCaract', nombreClub);

/* segundo */
var carrera = "ingenieriaensistemas";

var mayus = carrera.substring(0,1);  
var minus = carrera.substring(1, 20);
var mayuscula = mayus.toUpperCase();
var minusculas = minus.toLowerCase();

var cadena = mayuscula + minusculas;
console.log('cadena completa', cadena);

/* tercero */

var puesto = "analista funcional";
 var espacio = puesto.indexOf(" ",0);
 console.log('primer espacio en blanco', espacio);

