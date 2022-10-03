/* Consigna: -CREAR UN ALGORITMO SIMPLE-
Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultados con alert() o console.log()
 */

/* 
Sugerencia: 
Usamos prompt() para solicitar datos al usuario y console.log() o alert() para mostrar el resultado de las operaciones realizadas con esos datos. Si vas a sumar una entrada, tené en cuenta que tenés que parsearla antes. Usando parseInt() o parseFloat() 

//----------------------------------------------------  EJEMPLOS   ---------------------------------------------------------------------------//
Ejemplos: 
Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
*/
/* - OTROS EJEMPLOS -
EJEMPLO 1 : Solicitar el ano de nacimiento al usuario y decirle cuantos anos tiene
EJEMPLO 2: Solicitar un precio de un producto e informar el precio final con IVA incluido 
 */

//EJERCICIO EJEMPLO 1 (parseInt)

let edadUsuario = prompt("Ingrese ano nacimiento");

let totalUsuario = 2022 - edadUsuario

console.log("Su edad es " + totalUsuario);





//EJERCICIO EJEMPLO 2 (parseFloat)

