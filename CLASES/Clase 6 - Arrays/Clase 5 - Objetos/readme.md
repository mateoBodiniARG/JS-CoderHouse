# APUNTES JAVASCRIPT
#### En este proyecto hare apuntes sobre las clases tomadas en el curso de "CoderHouse" y ademas incorporare las practicas de cada clase.
---

# Clase 01 - CONCEPTOS GENERALES: SINTAXIS Y VARIABLES

#### VINCULAR ARCHIVO DE JAVASCRIPT AL HTML
```
<script src="main.js"></script>
```
####  LET/VAR = Se reserva un espacio en la memoria que puede ser actualizado a lo largo del tiempo
--
*EJEMPLO*
```javascript
let nombre; 
let edad;
```

 #### Inicializacion de esa variable
 ```Javascript
nombre = "Jose Luis";
edad = 23;
```
 ---
#### **CONST** = Este dato no va a ser modificado y NO se actualizara a lo largo del codigo
--
*EJEMPLO*
```sh
CONST PI = 3.14
```
---
 
## PRINCIPALES DIFERENCIAS (VAR,LET,CONST)
![](https://i.ytimg.com/vi/ojrvxYcKeYg/maxresdefault.jpg)

---
## CONCATENACION
```Javascript
let nombre = "Marina"
let apellido = "Gomez";
let nombreCompleto = nombre + " " + apellido; // Marina Gomez
```
---
#### **PROMPT** - ENTRADA DE DATOS (siempre lo lee en forma de string)

```Javascript
let bandaFavorita = prompt("Ingresa tu banda favorita");
console.log( "La banda favorita del usuario es: " + bandaFavorita);
```
---
#### **ALERT** - SALIDA DE DATOS 

```Javascript
let nomUsu = prompt("Hola!, ingrese su nombre porfavor: ")
alert("Buenas noches "+ nomUsu);
```

# License
### **Mateo Bodini**
