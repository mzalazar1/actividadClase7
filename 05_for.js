/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

/*primera*/
var frutas = ['pera','manzana','banana','naranja','pomelo'];

for (var i=0;i < frutas.length;i++) {
    var palabra = frutas[i];
    console.log(palabra[0].toUpperCase() + palabra.slice(1));
    alert("modificada");
}

/*segunda*/

var vacio = [];

for (var i=1; i<11;i++){
    var llenar = vacio.push(i);
    console.log('llenado', llenar);
}
console.log('nuevo arreglo', vacio);