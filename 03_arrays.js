/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

/*primero*/
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('meses 5 y 11:', meses[4], meses[10] );

/* segundo*/
let ordmeses = meses.sort();
console.log('meses ordenados:', ordmeses);

/*tercero*/
let ult = meses.push('ultimo');
console.log('ultimo', ult);

let pri = meses.unshift('primero');
console.log('elemento al principio', pri);
console.log('meses', meses);

/*cuarto*/
meses.pop();
console.log(meses);

meses.shift();
console.log(meses);

/* quinto */
const invertido = meses.reverse();
console.log('array invertido', invertido);

/* sexto */
console.log(meses.join('-'));

/*septimo*/

let mesessinord = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const nuevoarr = mesessinord.slice(4,12);
console.log('nuevo arreglo', nuevoarr);