//ARRAYS -- LISTAS

const listaCompras = ["Leche", "Agua", "Harina", "Pan", "Lechua", "Tomate"];
console.log(listaCompras);

console.log(listaCompras[2]);
console.log(listaCompras[0]);

// RECORRER ARRAY

console.log("******* Recorrido de la lista *******");
for (let i = 0; i < listaCompras.length; i++) {
  console.log(listaCompras[i]);
}

// PROPIEDAD LENGTH --> LONGITUD DEL ARRAY
console.log(listaCompras.length);

// METODO PUSH --> AGREGA UN NUEVO ELEMENTO AL FINAL DE LA LISTA
listaCompras.push("Sal");
console.log(listaCompras);

// METODO UNSHIFT --> El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
listaCompras.unshift("Hamburguesa");
console.log(listaCompras);

// METODO POP --> El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
listaCompras.pop("Hamburguesa");
console.log(listaCompras);

// METODO SHIFT--> El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

listacompras.shift();
console.log(listacompras);

// METODO SPLICE --> El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
listaCompras.splice(3, 2); // 3 Es la posicion
