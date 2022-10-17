
//objetos literales
const miReloj = {
    marca: "Casio",
    color: "Rojo",
    modelo: "0K95",
    malla: "cuero"
}

console.log(miReloj)
console.log(`La marca del reloj seleccionado es: ${miReloj.marca}`) //Mostrar marca de miReloj
console.log(`El modelo del reloj seleccionado es: ${miReloj.modelo}`) //Mostrar marca de miReloj



//objetos constructor - Podria considerarse como una plantilla que luego usaremos para crear mas objetos
class Computadora {
    constructor(tipo,sistema) {
        this.tipo = tipo;
        this.sistema = sistema;
}
}

const compu1 = new Computadora("notebook","windows");

console.log(compu1)

class Telefono{
    constructor(marca,modelo,stock,sistemaOperativo){
        this.marca = marca;
        this.modelo = modelo;
        this.stock = stock;
        this.sistemaOperativo = sistemaOperativo;
    }
}

const samsung = new Telefono ( "Samsung", "Z fold", 10, "android" )

console.table(samsung)