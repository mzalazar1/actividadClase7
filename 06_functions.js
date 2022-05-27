/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
A laçujfunción suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

/* primero*/
function sumar(a,b) {
   validar(a,b);


    if (isNaN(a)) {
        alert("error");
        return a;
        
    }
    if (isNaN(b)) {
        alert("error");
        return b
        ;
    }

    resultado = a + b;
    console.log('el resultado de la suma es:', resultado);

}
function validar(a,b) {
   if  (Number.isInteger(a) === false) {
     var a1 = a.toFixed();
       console.log('nuevo valor', a1)
       return a1;
   } 
   if (Number.isInteger(b) === false) {
    var b1 = b.toFixed();
    console.log('nuevo valor', b1)
    return b1;
   }
}

sumar(1,5.4);

