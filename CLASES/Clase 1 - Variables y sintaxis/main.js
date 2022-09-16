// Primera forma de comentar (comentario en linea)

/* 
Segunda forma de comentar
se puede comentar 
mas de una linea
*/

//-----------------------------DECLARACION DE UNA VARIABLE-----------------------------------------------------//


let nombre; 
let edad;
// Inicializacion de esa variable
nombre = "Jose Luis";
edad = 23;

// ¿Porque variable?  Porque ese valor puede ser actualizado
nombre = "Marina";
edad = 40; 

// OPERACIONES MATEMATICAS BASICAS

let num1 = 8;
let num2 = 3;

//suma
let suma = num1 + num2;
//resta
let resta = num1 - num2;
//multiplicacion
let multiplicacion = num1 * num2;
//division
let division = num1 / num2;

// concatenacion
let apellido = "Gomez";
let nombreCompleto = nombre + " " + apellido; // Marina Gomez

let nomYEdad = nombre + " " + edad; // Marina40

//consola
console.log("Hola consola")
console.log("El resultado de la suma es: " + suma)
console.log("El resultado de la resta es: " + resta)
console.log("El resultado de la multiplicacion es: " + multiplicacion)
console.log("El resultado de la division es: " + division)

console.log("El nombre completo del usuario es: " + nombreCompleto)
console.log("El nombre concatenado a la edad es: " + nomYEdad)


// Prompt - entrada de datos (Simpre lo lee en forma de string)

let bandaFavorita = prompt("Ingresa tu banda favorita");
console.log( "La banda favorita del usuario es: " + bandaFavorita);

// alert - salida de datos
let nomUsu = prompt("Hola!, ingrese su nombre porfavor: ")
alert("Buenas noches "+ nomUsu + "!");

//-----------------------------------------------------------------------------------------------------------------------------//

// TAREA PARA EL HOGAR

// EJEMPLO 1 : Solicitar el ano de nacimiento al usuario y decirle cuantos anos tiene
// EJEMPLO 2: Solicitar un precio de un producto e informar el precio final con IVA incluido